-- Category: Technology
INSERT INTO categories (id, name, description) VALUES
(3, 'Technology', 'Tools and systems that solve practical problems.');

INSERT INTO related_words (id, category_id, category, word, description, alternative_definition) VALUES
(21, 3, 'Technology', 'algorithm', 'Step-by-step logic that solves a defined task.', NULL),
(22, 3, 'Technology', 'database', 'Structured storage for reliable data retrieval.', NULL),
(23, 3, 'Technology', 'cloud', 'Remote computing resources delivered over network.', NULL),
(24, 3, 'Technology', 'sensor', 'Device that detects change and reports signals.', NULL),
(25, 3, 'Technology', 'encryption', 'Method that protects data through coded access.', NULL),
(26, 3, 'Technology', 'bandwidth', 'Capacity that limits speed for data transfer.', NULL),
(27, 3, 'Technology', 'interface', 'Connection layer between user and system actions.', NULL),
(28, 3, 'Technology', 'firmware', 'Embedded software that controls device hardware.', NULL),
(29, 3, 'Technology', 'automation', 'Processes that run with minimal human input.', NULL),
(30, 3, 'Technology', 'latency', 'Delay between request and system response.', NULL);
