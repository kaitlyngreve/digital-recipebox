5.times do
    username = Faker::Internet.username(specifier: 8..12)
    # password = Faker::Internet.password(min_length: 6, max_length: 12)
    bio = Faker::Hipster.sentence(word_count: 6)
    User.create(username: username, password: "password", bio: bio)
end

puts "Done seeding users 🥳"

c1 = Cuisine.create(cuisine_type: "American")
c2 = Cuisine.create(cuisine_type: "Chinese")
c3 = Cuisine.create(cuisine_type: "Mediterranean")
c4 = Cuisine.create(cuisine_type: "Italian")
c5 = Cuisine.create(cuisine_type: "Indian")
c6 = Cuisine.create(cuisine_type: "Mexican")
c7 = Cuisine.create(cuisine_type: "French")

puts "Done seeding cuisines 🍜"

Recipe.create(
    title: "Pesto",
    description: "Absolutely perfect as a topping or dipping sauce with your favorite Italian dish!",
    measurements_ingredients: 
    "2 cups Fresh Basil Leaves |
    2 Cloves Gralic |
    1/3 cup Pine Nuts |
    1/2 cup Freshly Grated Parmesan Cheese |
    1/4 tsp Salt |
    1/4 tsp Pepper |
    1/2 Olive Oil",
    directions: "Add all ingredients EXCEPT for the olive oil into a food processor. Pulse about 5 times until a coarse mixture forms. Turn the food processor on low and add the olive oil slowly and in a steady stream. Serve immediately or store in a bowl covered in the refrigerator ",
    img_url: "https://images.unsplash.com/photo-1519623286359-e9f3cbef015b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    cuisine_id: c4.id,
    user_id: Faker::Number.within(range: 1..5)
)

Recipe.create(
    title: "Banana Pancake",
    description: "This three ingredient pancake is sure to satisfy the pancake craving. Make sure to top it with your favorite pancake toppings!",
    measurements_ingredients: 
    "1 really ripe banana | 
    1 egg | 
    2 tbsp all-purpose flour",
    directions: "Set a pan to low heat and melt the butter. In a bowl, mash the banana. Add in egg and stir. Next, add in the flour and stir until
    fully combined. Pour batter into pan and cook until golden brown on each side. Top with desired toppings.",
    img_url: "https://images.unsplash.com/photo-1551772412-61103ced2766?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
    cuisine_id: c1.id,
    user_id: Faker::Number.within(range: 1..5)
)

Recipe.create(
    title: "Strawberry Cream Cheese Danish",
    description: "The Strawberry Cream Cheese Danish is sweet breakfast perfection!",
    measurements_ingredients: 
    "STRAWBERRY FILLING 🍓 |
    1 lb Strawberries |
    1/4 cup Granulated Sugar |
    1 tsp Lemon Juice |
    CREAM CHEESE FILLING |
    1 block Cream Cheese, softened |
    1/3 cup Granulated Sugar |
    1 tsp Lemon Juice |
    3/4 tsp Vanilla Extract |
    1 Puff Pastry Sheet, defrosted |
    1 Egg, lightly beaten |
    ICING |
    1 cup Powdered Sugar |
    1 tbsp Milk |
    1/2 tsp Vanilla Extract",
    directions: "Preheat oven to 350 degrees. To make the strawberry filling, combine strawberries, sugar, and lemon jusice in a saucepan. Bring mixture to a boil and then lower heat to simmer.
    Cook for 20-25 minutes, or until the strawberries have begun to break down. Remove from heat, set aside. | To make the cream cheese filling, in a stand mixer, combine cream cheese, sugar, lemon juice, and vanilla. 
    Beat until whipped - about 2-3 minutes. Set aside. | Lay your puff pastry sheet on a lightly floured surface and cut into 4th's. Place the puff pastry squares, in a row, onto a lightly oiled cookie sheet. 
    Place a spoonful of cream cheese mixture onto puff pastry, followed by a spoonful of strawberry mixture. Using a pastry brush, brush egg wash onto corner's of puff pastry. Fold all corners of puff pastry towards each other, 
    pinching all the seams together. Bake in preheated oven for 20-30 minutes or until puff pastry is golden and beginning to flake. Remove from heat and allow to cool completely before icing | For icing, combine powdered sugar, milk, and vanilla until well combined.
    Drizzle icing on cooled danish's. Serve immediately! ",
    img_url: "https://4.bp.blogspot.com/-3SE5aXIVMF0/V1II0c41LCI/AAAAAAAAVps/_h_Wzb2r1O8W015b5UIt2VICvQ3sXNeSACKgB/s1600/IMG_5342.jpg",
    cuisine_id: c7.id,
    user_id: Faker::Number.within(range: 1..5)
)

Recipe.create(
    title: "Simple Red Sauce Gnocchi",
    description: "That perfect comfort dish with some flare",
    measurements_ingredients: 
    "1 package of favorite Gnocchi |
    1 jar of favorite Red Sauce |
    1 Tbsp minced Garlic |
    1/2 a White Onion |
    1/4 cup Heavy Cream |
    Olive Oil |
    1 Tbsp Red Pepper Flakes (optional: gives dish heat) |
    Freshly Grated Parmesan Cheese for topping",
    directions: "Cook gnocchi per package instructions. In a pan, heat oil. Add in roughly chopped onions and cook until fragrant. Add in minced garlic and cook until it begins to crips. 
    Pour sauce, heavy cream, and red pepper flakes into the pan with the onions and garlic. Place on low heat and simmer for about 10-20 minutes. Stir in cooked gnocchi. Serve immediately and top with grated parmesan.",
    img_url: "https://images.unsplash.com/photo-1593003290701-d5e71453a85a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    cuisine_id: c4.id,
    user_id: Faker::Number.within(range: 1..5)
)

Recipe.create(
    title: "Breakfast Oatmeal",
    description: "An incredibly personalizable and wholesome breakfast!",
    measurements_ingredients: 
    "1/2 cup Quick Oats |
    1 cup Milk or Water |
    Any desired toppings!",
    directions: "Bring milk (or water) to a boil. Reduce heat and stir in oats. Cook until thickened (about one minute). Remove from heat and serve in a bowl with desired toppings. |
    I like to top with some combination of peanutbutter, raspberries, blueberries, sliced almonds, honey, and cinnamon, chia seeds, etc. ",
    img_url: "https://images.unsplash.com/photo-1610406765661-57646c40da59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80",
    cuisine_id: c1.id,
    user_id: Faker::Number.within(range: 1..5)
)

Recipe.create(
    title: "Gyro Style Chicken",
    description: "Tender and juicy chicken, quick to make, and perfect to fill those pitas with.",
    measurements_ingredients: 
    "2 lbs Boneless Chicken |
    2 Tbsp Olive Oil |
    2 Tbsp Lemon Juice |
    2 tsp Paprika |
    2 tsp Cumin |
    2 cloves of minced Garlic |
    1 tsp Tumeric |
    1 tsp Salt |
    1/4 tsp Freshly ground black Pepper |
    1/4 tsp Onion Powder |
    1/4 Ground Cinnamon |
    1/4 tsp Crush Red Pepper Flakes",
    directions: "Combine all ingredients, and stir well. Place chicken in a large bowl and pour marinade over top. Stir well to coat and let it rest for 1-4 hours.
    Grill chicken until fully cooked. Serve warm on pita with tzatziki sauce and veggies.",
    img_url: "https://images.unsplash.com/photo-1643594462181-7667928d072e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1636&q=80",
    cuisine_id: c3.id,
    user_id: Faker::Number.within(range: 1..5)
)

puts "Done seeding recipes ✏️"

