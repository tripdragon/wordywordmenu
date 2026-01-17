-- Category: Music
INSERT INTO categories (id, name, description) VALUES
(5, 'Music', 'Organized sound used for expression and rhythm.');

INSERT INTO related_words (id, category_id, category, word, description, alternative_definition) VALUES
(41, 5, 'Music', 'melody', 'Singable line that carries the main theme; it guides emotion.'),
(42, 5, 'Music', 'rhythm', 'Pulse and pattern that drive timing and movement.'),
(43, 5, 'Music', 'harmony', 'Stacked tones that add color and tension.'),
(44, 5, 'Music', 'tempo', 'Speed of the beat that shapes energy.'),
(45, 5, 'Music', 'chorus', 'Repeated section that anchors the song.'),
(46, 5, 'Music', 'improv', 'Spontaneous playing that reacts to the moment.'),
(47, 5, 'Music', 'score', 'Written music that directs performance details.'),
(48, 5, 'Music', 'crescendo', 'Gradual rise in volume for dramatic lift.'),
(49, 5, 'Music', 'timbre', 'Tone quality that distinguishes instruments or voices.'),
(50, 5, 'Music', 'beat', 'Regular accent that listeners can follow.');
