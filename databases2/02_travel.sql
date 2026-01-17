-- Category: Travel
INSERT INTO categories (id, name, description) VALUES
(2, 'Travel', 'Moving through places for work or leisure.');

INSERT INTO related_words (id, category_id, category, word, description, alternative_definition) VALUES
(11, 2, 'Travel', 'itinerary', 'Planned route that organizes time and stops.', NULL),
(12, 2, 'Travel', 'passport', 'Official ID needed for border entry and travel.', NULL),
(13, 2, 'Travel', 'layover', 'Short stop between flights while in transit.', NULL),
(14, 2, 'Travel', 'backpack', 'Portable storage for essentials on the move.', NULL),
(15, 2, 'Travel', 'hostel', 'Budget lodging that favors shared spaces.', NULL),
(16, 2, 'Travel', 'souvenir', 'Memento that ties a trip to a memory.', NULL),
(17, 2, 'Travel', 'jetlag', 'Body clock shift after crossing time zones.', NULL),
(18, 2, 'Travel', 'visa', 'Permission document for entry or extended stay.', NULL),
(19, 2, 'Travel', 'guidebook', 'Reference that highlights culture, maps, and tips.', NULL),
(20, 2, 'Travel', 'excursion', 'Short trip that adds a focused experience.', NULL);
