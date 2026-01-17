
import './styles/Groups.scss';
import { useEffect, useMemo, useState } from 'react';
import ArticleWord from './articleWord.js';
import SearchInput2 from './SearchInput2.js';


const sql_file = "central_data_2/central_data_2.sql";



export default function Builder2() {
  const [sqlText, setSqlText] = useState('');
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');

  const extractAllInsertValues = (sql, tableName) => {
    const insertRegex = new RegExp(
      `INSERT INTO\\s+${tableName}\\s*\\([^)]*\\)\\s*VALUES\\s*`,
      'gi'
    );
    const valuesBlocks = [];
    let match = insertRegex.exec(sql);

    while (match) {
      let inString = false;
      const startIndex = match.index + match[0].length;
      let endIndex = -1;

      for (let i = startIndex; i < sql.length; i += 1) {
        const char = sql[i];
        const nextChar = sql[i + 1];

        if (char === "'" && inString && nextChar === "'") {
          i += 1;
          continue;
        }

        if (char === "'") {
          inString = !inString;
          continue;
        }

        if (!inString && char === ';') {
          endIndex = i;
          break;
        }
      }

      if (endIndex !== -1) {
        valuesBlocks.push(sql.slice(startIndex, endIndex).trim());
        insertRegex.lastIndex = endIndex + 1;
      } else {
        break;
      }

      match = insertRegex.exec(sql);
    }

    return valuesBlocks;
  };

  const extractTuples = (valuesText) => {
    const tuples = [];
    let current = '';
    let depth = 0;
    let inString = false;

    for (let i = 0; i < valuesText.length; i += 1) {
      const char = valuesText[i];
      const nextChar = valuesText[i + 1];

      if (char === "'" && inString && nextChar === "'") {
        current += "''";
        i += 1;
        continue;
      }

      if (char === "'") {
        inString = !inString;
        if (depth > 0) {
          current += char;
        }
        continue;
      }

      if (!inString && char === '(') {
        if (depth === 0) {
          current = '';
        } else {
          current += char;
        }
        depth += 1;
        continue;
      }

      if (!inString && char === ')' && depth > 0) {
        depth -= 1;
        if (depth === 0) {
          tuples.push(current);
        } else {
          current += char;
        }
        continue;
      }

      if (depth > 0) {
        current += char;
      }
    }

    return tuples;
  };

  const parsed = useMemo(() => {
    if (!sqlText) {
      return { categories: [], relatedWords: [] };
    }

    const categories = [];
    const relatedWords = [];

    const categoriesInserts = extractAllInsertValues(sqlText, 'categories');
    if (categoriesInserts.length > 0) {
      const tuples = categoriesInserts.flatMap((block) => extractTuples(block));
      tuples.forEach((tuple) => {
        const parts = tuple
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

    const relatedInserts = extractAllInsertValues(sqlText, 'related_words');
    if (relatedInserts.length > 0) {
      const tuples = relatedInserts.flatMap((block) => extractTuples(block));
      tuples.forEach((tuple) => {
        const parts = tuple
          .split(/,(?=(?:[^']*'[^']*')*[^']*$)/)
          .map((part) => part.trim());
        if (parts.length >= 5) {
          const id = Number(parts[0]);
          const categoryId = Number(parts[1]);
          const category = parts[2].replace(/^'|'$/g, '').replace(/''/g, "'");
          const word = parts[3].replace(/^'|'$/g, '').replace(/''/g, "'");
          const description = parts[4].replace(/^'|'$/g, '').replace(/''/g, "'");
          const rawAltDefinition = parts[5] ? parts[5].trim() : '';
          const alternativeDefinition =
            rawAltDefinition && rawAltDefinition.toUpperCase() !== 'NULL'
              ? rawAltDefinition.replace(/^'|'$/g, '').replace(/''/g, "'")
              : '';
          const altDefinitions = alternativeDefinition
            ? [{ persona: 'Alternative', definition: alternativeDefinition }]
            : [];
          relatedWords.push({
            id,
            categoryId,
            category,
            word,
            description,
            alternativeDefinition,
            altDefinitions,
          });
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

  const filteredCategories = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) {
      return parsed.categories.map((category) => ({
        ...category,
        words: relatedByCategoryId.get(category.id) || [],
      }));
    }

    return parsed.categories.reduce((acc, category) => {
      const categoryMatch = category.name.toLowerCase().includes(trimmed);
      const words = relatedByCategoryId.get(category.id) || [];
      const matchedWords = categoryMatch
        ? words
        : words.filter((entry) => entry.word.toLowerCase().includes(trimmed));

      if (categoryMatch || matchedWords.length > 0) {
        acc.push({ ...category, words: matchedWords });
      }

      return acc;
    }, []);
  }, [parsed.categories, query, relatedByCategoryId]);

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
      {/* <h1>Builder2: SQL Loader</h1> */}
      {error ? (
        <p>{error}</p>
      ) : !sqlText ? (
        <p>Loading...</p>
      ) : (
        <>
          <SearchInput2
            value={query}
            onChange={setQuery}
            onClear={() => setQuery('')}
          />

          <div className="groups">
            {filteredCategories.length === 0 ? (
              <p>No results.</p>
            ) : (
              filteredCategories.map((category) => (
                <section key={category.id} className="category">
                  <h2 className='categoryName'>{category.name}</h2>
                  <p className='definition'>{category.description}</p>
                  {category.words.length ? (
                    <>
                      {category.words.map((yy) => (
                        <div key={yy.id}>
                          <ArticleWord
                            title={yy.word}
                            definition={yy.description}
                            article={yy}
                            useToggle
                          />
                        </div>
                      ))}
                    </>
                  ) : (
                    <p>No related words found.</p>
                  )}
                </section>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
}
