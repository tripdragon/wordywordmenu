import { useEffect, useMemo, useState } from 'react';
import ArticleWord from './articleWord.js';


const sql_file = "seed_categories.sql";



export default function Builder2() {
  const [sqlText, setSqlText] = useState('');
  const [error, setError] = useState('');

  const parsed = useMemo(() => {
    if (!sqlText) {
      return { categories: [], relatedWords: [] };
    }

    const categories = [];
    const relatedWords = [];

    const categoriesInsert = sqlText.match(
      /INSERT INTO categories\s*\([^\)]*\)\s*VALUES\s*([\s\S]*?);/i
    );
    if (categoriesInsert) {
      const tuples = [...categoriesInsert[1].matchAll(/\(([^)]+)\)/g)];
      tuples.forEach((tuple) => {
        const parts = tuple[1]
          .split(/,(?=(?:[^']*'[^']*')*[^']*$)/)
          .map((part) => part.trim());
        if (parts.length >= 3) {
          const id = Number(parts[0]);
          const name = parts[1].replace(/^'|'$/g, '').replace(/''/g, "'");
          const description = parts[2].replace(/^'|'$/g, '').replace(/''/g, "'");
          categories.push({ id, name, description });
        }
      });
    }

    const relatedInsert = sqlText.match(
      /INSERT INTO related_words\s*\([^\)]*\)\s*VALUES\s*([\s\S]*?);/i
    );
    if (relatedInsert) {
      const tuples = [...relatedInsert[1].matchAll(/\(([^)]+)\)/g)];
      tuples.forEach((tuple) => {
        const parts = tuple[1]
          .split(/,(?=(?:[^']*'[^']*')*[^']*$)/)
          .map((part) => part.trim());
        if (parts.length >= 5) {
          const id = Number(parts[0]);
          const categoryId = Number(parts[1]);
          const category = parts[2].replace(/^'|'$/g, '').replace(/''/g, "'");
          const word = parts[3].replace(/^'|'$/g, '').replace(/''/g, "'");
          const description = parts[4].replace(/^'|'$/g, '').replace(/''/g, "'");
          relatedWords.push({ id, categoryId, category, word, description });
        }
      });
    }

    return { categories, relatedWords };
  }, [sqlText]);

  const relatedByCategoryId = useMemo(() => {
    const grouped = new Map();
    parsed.relatedWords.forEach((entry) => {
      if (!grouped.has(entry.categoryId)) {
        grouped.set(entry.categoryId, []);
      }
      grouped.get(entry.categoryId).push(entry);
    });
    return grouped;
  }, [parsed.relatedWords]);

  useEffect(() => {
    let isMounted = true;
    const sqlUrl = `${process.env.PUBLIC_URL}/${sql_file}`;

    fetch(sqlUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load SQL: ${response.status} ${response.statusText}`);
        }
        return response.text();
      })
      .then((text) => {
        if (isMounted) {
          setSqlText(text);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="Builder2">
      <h1>Builder2: SQL Loader</h1>
      {error ? (
        <p>{error}</p>
      ) : !sqlText ? (
        <p>Loading...</p>
      ) : (
        <div className="groups">
          {parsed.categories.map((category) => {
            const related = relatedByCategoryId.get(category.id) || [];
            return (
              <section key={category.id} className="category">
                <h2>{category.name}</h2>
                {/* <p>{category.description}</p> */}
                {related.length ? (
                  <>
                    {related.map((yy) => (
                      <div>
                        
                      <ArticleWord key={yy.id} title={yy.word} definition={yy.description} article={yy} />
                      </div>
                      
                      // <li key={entry.id}>
                      //   <strong>{entry.word}</strong>: {entry.description}
                      // </li>
                    ))}
                  </>
                ) : (
                  <p>No related words found.</p>
                )}
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
