-- Category: Art
INSERT INTO categories (id, name, description) VALUES
(9, 'Art', 'Creative work that communicates feeling or thought.');

INSERT INTO related_words (id, category_id, category, word, description, alternative_definition) VALUES
(81, 9, 'Art', 'canvas', 'Surface that receives paint or mixed media.'),
(82, 9, 'Art', 'palette', 'Selection of colors used in a piece.'),
(83, 9, 'Art', 'composition', 'Arrangement that guides the viewer''s eye.'),
(84, 9, 'Art', 'contrast', 'Difference in value that creates emphasis.'),
(85, 9, 'Art', 'texture', 'Visual or tactile surface quality.'),
(86, 9, 'Art', 'sketch', 'Quick study that explores shape and idea.'),
(87, 9, 'Art', 'perspective', 'Technique that shows depth and scale.'),
(88, 9, 'Art', 'medium', 'Material or method used to create work.'),
(89, 9, 'Art', 'motif', 'Recurring element that builds cohesion.'),
(90, 9, 'Art', 'critique', 'Structured review that refines the work.');
