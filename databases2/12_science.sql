-- Category: Science
INSERT INTO categories (id, name, description) VALUES
(12, 'Science', 'Systematic study of the natural world.');

INSERT INTO related_words (id, category_id, category, word, description, alternative_definition) VALUES
(111, 12, 'Science', 'hypothesis', 'Testable idea that frames a scientific question.'),
(112, 12, 'Science', 'experiment', 'Controlled test that gathers evidence.'),
(113, 12, 'Science', 'data', 'Measured observations used to analyze results.'),
(114, 12, 'Science', 'theory', 'Well-supported explanation for natural behavior.'),
(115, 12, 'Science', 'variable', 'Factor that can change in a study.'),
(116, 12, 'Science', 'analysis', 'Interpretation that reveals patterns in results.'),
(117, 12, 'Science', 'peerreview', 'Expert critique that checks methods and claims.'),
(118, 12, 'Science', 'lab', 'Workspace for observation and testing.'),
(119, 12, 'Science', 'model', 'Simplified representation of complex systems.'),
(120, 12, 'Science', 'evidence', 'Proof that supports or refutes a claim.');
