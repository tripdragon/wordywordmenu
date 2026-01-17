-- Category: Literature
INSERT INTO categories (id, name, description) VALUES
(13, 'Literature', 'Written works that explore story and meaning.');

INSERT INTO related_words (id, category_id, category, word, description, alternative_definition) VALUES
(121, 13, 'Literature', 'narrative', 'Story structure that carries events and meaning.'),
(122, 13, 'Literature', 'character', 'Person in a story who drives action.'),
(123, 13, 'Literature', 'theme', 'Core idea that unifies the work.'),
(124, 13, 'Literature', 'metaphor', 'Comparison that adds depth to interpretation.'),
(125, 13, 'Literature', 'prose', 'Ordinary writing style without line breaks.'),
(126, 13, 'Literature', 'poetry', 'Condensed language focused on rhythm and image.'),
(127, 13, 'Literature', 'genre', 'Category that signals style and expectations.'),
(128, 13, 'Literature', 'plot', 'Sequence of events that builds tension.'),
(129, 13, 'Literature', 'dialogue', 'Spoken exchange that reveals character.'),
(130, 13, 'Literature', 'setting', 'Time and place that ground the story.');
