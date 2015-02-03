# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

u1 = User.create(email: 'user1@example.com', password: 'password')
u1.save
u2 = User.create(email: 'user2@example.com', password: 'password')
u2.save

u1.notebooks << Notebook.create(title: "Notebook A", ord: "0")
u1.notebooks << Notebook.create(title: "Notebook B", ord: "1")
u1.notebooks << Notebook.create(title: "Notebook C", ord: "2")

u2.notebooks << Notebook.create(title: "Notebook D", ord: "0")
u2.notebooks << Notebook.create(title: "Notebook E", ord: "1")
u2.notebooks << Notebook.create(title: "Notebook F", ord: "2")
