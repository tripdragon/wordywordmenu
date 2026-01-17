-- Category: Programming
INSERT INTO categories (id, name, description) VALUES
(17, 'Programming', 'Writing instructions that computers can execute.');

INSERT INTO related_words (id, category_id, category, word, description, alternative_definition) VALUES
(161, 17, 'Programming', 'syntax', 'Rules that define valid code structure.'),
(162, 17, 'Programming', 'compile', 'Transforming source into runnable output.'),
(163, 17, 'Programming', 'debug', 'Finding and fixing code defects.'),
(164, 17, 'Programming', 'runtime', 'Execution environment for a program.'),
(165, 17, 'Programming', 'library', 'Reusable code that adds capabilities.'),
(166, 17, 'Programming', 'function', 'Named block that performs a task.'),
(167, 17, 'Programming', 'variable', 'Named storage for changing values.'),
(168, 17, 'Programming', 'loop', 'Repeated execution over a sequence.'),
(169, 17, 'Programming', 'exception', 'Error event that interrupts normal flow.'),
(170, 17, 'Programming', 'version', 'Tracked state of code over time.');
