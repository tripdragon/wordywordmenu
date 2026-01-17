-- Category: Health
INSERT INTO categories (id, name, description) VALUES
(10, 'Health', 'Well-being of body and mind in daily life.');

INSERT INTO related_words (id, category_id, category, word, description, alternative_definition) VALUES
(91, 10, 'Health', 'nutrition', 'Food quality that fuels and repairs the body.'),
(92, 10, 'Health', 'hydration', 'Water balance that keeps systems running.'),
(93, 10, 'Health', 'sleep', 'Rest cycle that supports recovery and focus.'),
(94, 10, 'Health', 'immunity', 'Defense system that resists illness.'),
(95, 10, 'Health', 'mindfulness', 'Attention practice that reduces stress.'),
(96, 10, 'Health', 'checkup', 'Routine visit that monitors overall health.'),
(97, 10, 'Health', 'symptom', 'Signal that indicates a body issue.'),
(98, 10, 'Health', 'therapy', 'Treatment plan for mental or physical care.'),
(99, 10, 'Health', 'balance', 'Healthy mix of work, rest, and play.'),
(100, 10, 'Health', 'prevention', 'Habits that reduce future health risks.');
