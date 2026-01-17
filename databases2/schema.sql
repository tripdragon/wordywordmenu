CREATE TABLE categories (
  id INTEGER PRIMARY KEY,
  name TEXT,
  description TEXT
);

CREATE TABLE related_words (
  id INTEGER PRIMARY KEY,
  category_id INTEGER,
  category TEXT,
  word TEXT,
  description TEXT,
  alternative_definition TEXT
);
