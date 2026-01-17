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

const dataFiles = fs
  .readdirSync(sourceDir)
  .filter((file) => file.endsWith('.sql') && file !== 'schema.sql')
  .sort();

const dataSections = dataFiles.map((file) =>
  fs.readFileSync(path.join(sourceDir, file), 'utf8').trim()
);

const indexSection = [
  'CREATE INDEX IF NOT EXISTS idx_related_words_category_id ON related_words(category_id);',
  'CREATE INDEX IF NOT EXISTS idx_related_words_word ON related_words(word);',
].join('\n');

const combined = [
  '-- Combined SQL generated from databases2',
  schema,
  '',
  ...dataSections,
  '',
  '-- Indexes',
  indexSection,
  '',
].join('\n');

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputFile, combined);

console.log(`Wrote ${path.relative(rootDir, outputFile)}`);
