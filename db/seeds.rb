Part.destroy_all

1.upto(10) {|num|
  Part.create!(name: "Part No. #{num}", description: Faker::Superhero.power)
}
