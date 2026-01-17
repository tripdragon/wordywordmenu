-- Category: Cooking
INSERT INTO categories (id, name, description) VALUES
(1, 'Cooking', 'Preparing food with heat, tools, and technique.');

INSERT INTO related_words (id, category_id, category, word, description, alternative_definition) VALUES
(1, 1, 'Cooking', 'simmer', 'Gentle heat that builds flavor without boiling.', 'Low, lazy heat that coaxes flavors to mingle.'),
(2, 1, 'Cooking', 'saute', 'Quick pan cooking that browns and lifts aroma.', NULL),
(3, 1, 'Cooking', 'marinate', 'Soaking food to infuse herbs, acid, and spice.', 'A flavor bath that seasons before the heat.'),
(4, 1, 'Cooking', 'whisk', 'Rapid mixing to blend air and smooth texture.', 'Beat fast to trap air and smooth the mix.'),
(5, 1, 'Cooking', 'broil', 'High top heat that crisps surfaces fast.', NULL),
(6, 1, 'Cooking', 'knead', 'Working dough to develop gluten and structure.', NULL),
(7, 1, 'Cooking', 'reduce', 'Slowly thickening liquids to intensify taste.', NULL),
(8, 1, 'Cooking', 'sear', 'Hot contact that seals surface and adds depth.', 'Quick blast of heat that builds a crust.'),
(9, 1, 'Cooking', 'zest', 'Citrus peel that brightens dishes with oils.', NULL),
(10, 1, 'Cooking', 'blanch', 'Brief boil then chill to set color and bite.', NULL);
