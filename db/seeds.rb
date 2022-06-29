15.times do
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

puts "Done seeding cuisines 🍜"

Recipe.create(
    title: "Grilled Cheese",
    description: "Perfectly toasted with a cheese pull to blow your mind. Eat it with your favorite soup, or by itself.",
    measurements_ingredients: "2 slices of Sourdough Bread, 2 Tbsp Unsalted Butter, 3 slices of favorite cheese",
    directions: "Set a pan to low heat and melt the butter. Place one piece of bread in the pan, layer with cheese, and place second piece of bread on top. 
    Cover pan with lid. Watch closely until cheese has melted, then remove lid and increase heat. Flip sandwich to avoid burning on one side.
    As soon as both sides are golden brown, remove from pan. Enjoy!",
    img_url: "https://images.unsplash.com/photo-1634598604019-7fca68ad3b8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80",
    cuisine_id: c1.id,
    user_id: Faker::Number.within(range: 1..15)
)

Recipe.create(
    title: "Banana Pancake",
    description: "This three ingredient pancake is sure to satisfy the pancake craving. Top with your favorite pancake toppings!",
    measurements_ingredients: "1 really ripe banana, 1 egg, 2 Tbsp all-purpose flour",
    directions: "Set a pan to low heat and melt the butter. In a bowl, mash banana. Add in egg and stir. Next, add in the flour and stir until
    fully combined. Pour batter into pan and cook until golden brown on each side. Top with desired toppings.",
    img_url: "https://images.unsplash.com/photo-1551772412-61103ced2766?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
    cuisine_id: c1.id,
    user_id: Faker::Number.within(range: 1..15)
)

Recipe.create(
    title: "15 Minute Margherita Pizza",
    description: "Super simple and easy to put together margherita pizza is great for a weeknight pizza fix.",
    measurements_ingredients: "2 Pre-packaged naan bread, 1/2 cup of your favorite pizza sauce, 4 oz whole milk mozzarella cheese, 
    1-2 ripe Campari tomatoes (sliced thinly), fine sea salt & pepper, fresh basil, freshly grated parmesan cheese, extra virgin oliv oil",
    directions: Faker::Hipster.sentence(word_count: 10),
    img_url: "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2472&q=80",
    cuisine_id: c4.id,
    user_id: Faker::Number.within(range: 1..15)
)

Recipe.create(
    title: "Tiramisu",
    description: "A decadent dessert of espresso-soaked ladyfingers surrounded by lightly sweetened whipped cream and a rich mascarpone.",
    measurements_ingredients: "For the Cream: 4 large egg yolks, ½ cup/100 grams granulated sugar divided, ¾ cup heavy cream, 1 cup/227 grams mascarpone (8 ounces) For the Assembly:
    1¾ cups good espresso or very strong coffee,
    2 tablespoons rum or cognac,
    2 tablespoons unsweetened cocoa powder,
    About 24 ladyfingers (from one 7-ounce/200-gram package)
    1 to 2 ounces bittersweet chocolate, for shaving (optional)",
    directions: Faker::Hipster.sentence(word_count: 10),
    img_url: "https://images.unsplash.com/photo-1639744211487-b27e3551b07c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80",
    cuisine_id: c4.id,
    user_id: Faker::Number.within(range: 1..15)
)

puts "Done seeding recipes ✏️"

