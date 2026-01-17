-- Category: Movies
INSERT INTO categories (id, name, description) VALUES
(19, 'Movies', 'Visual stories told with actors, sound, and edits.');

INSERT INTO related_words (id, category_id, category, word, description, alternative_definition) VALUES
(181, 19, 'Movies', 'screenplay', 'Script that defines dialogue, action, and pacing.'),
(182, 19, 'Movies', 'director', 'Lead creative who shapes the final film.'),
(183, 19, 'Movies', 'cinematography', 'Visual style built by camera and light.'),
(184, 19, 'Movies', 'montage', 'Edited sequence that compresses time.'),
(185, 19, 'Movies', 'soundtrack', 'Music that supports mood and narrative.'),
(186, 19, 'Movies', 'premiere', 'First public showing of a film.'),
(187, 19, 'Movies', 'genre', 'Category that signals tone and audience.'),
(188, 19, 'Movies', 'trailer', 'Short preview that highlights key moments.'),
(189, 19, 'Movies', 'scene', 'Contained segment that advances the story.'),
(190, 19, 'Movies', 'credits', 'List of people who made the film.');
