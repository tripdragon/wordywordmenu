const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const sourceDir = path.join(rootDir, 'databases2');
const schemaPath = path.join(sourceDir, 'schema.sql');
const outputDir = path.join(rootDir, 'public', 'central_data_2');
const outputFile = path.join(outputDir, 'central_data_2.sql');

if (!fs.existsSync(schemaPath)) {
  throw new Error('Missing databases2/schema.sql');
}

const schema = fs.readFileSync(schemaPath, 'utf8').trim();

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

const extractInsertValues = (sql, tableName) => {
  const insertRegex = new RegExp(
    `INSERT INTO\\s+${tableName}\\s*\\([^)]*\\)\\s*VALUES\\s*`,
    'i'
  );
  const match = insertRegex.exec(sql);
  if (!match) {
    return null;
  }

  let inString = false;
  const startIndex = match.index + match[0].length;

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
      return sql.slice(startIndex, i).trim();
    }
  }

  return null;
};

const splitParts = (tuple) =>
  tuple
    .split(/,(?=(?:[^']*'[^']*')*[^']*$)/)
    .map((part) => part.trim());

const dataFiles = fs
  .readdirSync(sourceDir)
  .filter((file) => file.endsWith('.sql') && file !== 'schema.sql')
  .sort();

const categories = [];
const relatedWords = [];

dataFiles.forEach((file, index) => {
  const sql = fs.readFileSync(path.join(sourceDir, file), 'utf8');
  const categoryValues = extractInsertValues(sql, 'categories');
  const relatedValues = extractInsertValues(sql, 'related_words');

  if (!categoryValues || !relatedValues) {
    throw new Error(`Missing inserts in ${file}`);
  }

  const categoryTuples = extractTuples(categoryValues);
  if (categoryTuples.length === 0) {
    throw new Error(`No category tuple in ${file}`);
  }

  const categoryParts = splitParts(categoryTuples[0]);
  const categoryId = index + 1;
  const categoryName = categoryParts[1];
  const categoryDescription = categoryParts[2];

  categories.push({
    id: categoryId,
    name: categoryName,
    description: categoryDescription,
  });

  const relatedTuples = extractTuples(relatedValues);
  relatedTuples.forEach((tuple) => {
    const parts = splitParts(tuple);
    relatedWords.push({
      categoryId,
      category: categoryName,
      word: parts[3],
      description: parts[4],
      alternativeDefinition: parts[5] || 'NULL',
    });
  });
});

const categoriesInsert = [
  'INSERT INTO categories (id, name, description) VALUES',
  categories
    .map(
      (category) =>
        `(${category.id}, ${category.name}, ${category.description})`
    )
    .join(',\n') + ';',
].join('\n');

const relatedInsert = [
  'INSERT INTO related_words (id, category_id, category, word, description, alternative_definition) VALUES',
  relatedWords
    .map((entry, idx) => {
      const id = idx + 1;
      return `(${id}, ${entry.categoryId}, ${entry.category}, ${entry.word}, ${entry.description}, ${entry.alternativeDefinition})`;
    })
    .join(',\n') + ';',
].join('\n');

const indexSection = [
  'CREATE INDEX IF NOT EXISTS idx_related_words_category_id ON related_words(category_id);',
  'CREATE INDEX IF NOT EXISTS idx_related_words_word ON related_words(word);',
].join('\n');

const combined = [
  '-- Combined SQL generated from databases2',
  schema,
  '',
  categoriesInsert,
  '',
  relatedInsert,
  '',
  '-- Indexes',
  indexSection,
  '',
].join('\n');

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputFile, combined);

console.log(`Wrote ${path.relative(rootDir, outputFile)}`);
