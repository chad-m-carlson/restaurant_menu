Menu.create(name: 'Breakfast')

Menu.create(name: 'Lunch')

Menu.create(name: 'Dinner')


x = 0
3.times do
  x += 1
  10.times do
    Item.create(
      name: Faker::Food.dish,
      description: Faker::Food.description,
      price: "$#{rand(3..20)}",
      available: true,
      menu_id: x,
      )
    end
  end

  puts "Populated menus with food and not so accurate descriptions"