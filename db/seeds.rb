# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

u1 = User.create!(email: 'user1@example.com', password: 'password')
u2 = User.create!(email: 'user2@example.com', password: 'password')

nb1 = u1.notebooks.create!(title: "Notebook A", ord: 0)
nb2 = u1.notebooks.create!(title: "Notebook B", ord: 1)
nb3 = u1.notebooks.create!(title: "Notebook C", ord: 2)
nb4 = u2.notebooks.create!(title: "Notebook D", ord: 0)
nb5 = u2.notebooks.create!(title: "Notebook E", ord: 1)
nb6 = u2.notebooks.create!(title: "Notebook F", ord: 2)

n1 = nb1.notes.create!(title: "Note A1", body: "Body of A1", ord: 0)
n2 = nb1.notes.create!(title: "Note A2", body: "Body of A2", ord: 1)
n3 = nb2.notes.create!(title: "Note B1", body: "Body of B1", ord: 0)
n4 = nb2.notes.create!(title: "Note B2", body: "Body of B2", ord: 1)
n5 = nb3.notes.create!(title: "Note C1", body: "Body of C1", ord: 0)
n6 = nb3.notes.create!(title: "Note C2", body: "Body of C2", ord: 1)
n7 = nb4.notes.create!(title: "Note D1", body: "Body of D1", ord: 0)
n8 = nb4.notes.create!(title: "Note D2", body: "Body of D2", ord: 1)
n9 = nb5.notes.create!(title: "Note E1", body: "Body of E1", ord: 0)
n10 = nb5.notes.create!(title: "Note E2", body: "Body of E2", ord: 1)
n11 = nb6.notes.create!(title: "Note F1", body: "Body of F1", ord: 0)
n12 = nb6.notes.create!(title: "Note F2", body: "Body of F2", ord: 1)

t1 = u1.tags.create!(label: "Everything")
t1.note_ids = [1,2,3,4,5,6]

t2 = u2.tags.create!(label: "Everything")
t2.note_ids = [7,8,9,10,11,12]

t3 = u1.tags.create!(label: "Ones")
t3.note_ids = [1,3,5]

t4 = u1.tags.create!(label: "Twos")
t4.note_ids = [2,4,6]

t5 = u2.tags.create!(label: "Ones")
t5.note_ids = [7,9,11]

t6 = u2.tags.create!(label: "Twos")
t6.note_ids = [8,10,12]
