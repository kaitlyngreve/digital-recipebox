15.times do
    username = Faker::Internet.username(specifier: 8..12)
    password = Faker::Internet.password(min_length: 6, max_length: 12)
    bio = Faker::Hipster.sentence(word_count: 6)
    User.create(username: username, password_digest: password, bio: bio)
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
    img_url: "images/grilled_cheese.jpg",
    cuisine_id: c1.id,
    user_id: Faker::Number.within(range: 1..15)
)

puts "Done seeding recipes ✏️"

