-- Category: Cuisine
INSERT INTO categories (id, name, description) VALUES
(18, 'Cuisine', 'Regional styles of flavor, technique, and tradition.');

INSERT INTO related_words (id, category_id, category, word, description, alternative_definition) VALUES
(171, 18, 'Cuisine', 'spice', 'Seasoning blend that defines regional heat.'),
(172, 18, 'Cuisine', 'stew', 'Slow-cooked dish that melds flavors.'),
(173, 18, 'Cuisine', 'streetfood', 'Portable bites tied to local culture.'),
(174, 18, 'Cuisine', 'herb', 'Fresh leaf flavor that lifts a dish.'),
(175, 18, 'Cuisine', 'broth', 'Savory liquid base for soups and sauces.'),
(176, 18, 'Cuisine', 'ferment', 'Process that deepens flavor and preserves.'),
(177, 18, 'Cuisine', 'noodle', 'Staple starch shaped for sauces or soups.'),
(178, 18, 'Cuisine', 'grill', 'Open heat method for char and smoke.'),
(179, 18, 'Cuisine', 'sauce', 'Complement that ties ingredients together.'),
(180, 18, 'Cuisine', 'dessert', 'Sweet finish that reflects local tradition.');
