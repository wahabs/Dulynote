u1 = User.create!(email: 'user@dulynote.com', password: 'vat9oryqbo0ater')

nb1 = u1.notebooks.create!(title: "Notebook A")
nb2 = u1.notebooks.create!(title: "Notebook B")
nb3 = u1.notebooks.create!(title: "Notebook C")


n1 = nb1.notes.create!(
  title: "Hello.",
  body:  "Click on my title, body, and/or sticker to edit!<p><br>Highlight\n         some text and click one of the navbar buttons to apply formatting.\n         </p><p>We can <b>bold, </b><i> i<i>talicize, </i></i>and<i><i>\n         </i></i> <u>underline</u>. The eraser removes this type of formatting.\n         &nbsp;</p><ol><li>Here's a</li><li>numbered list</li><li>just for you!\n         </li></ol><ul><li>But what about</li><li>all these</li><li>bullets though?\n         </li></ul>Use the text resize button to create headers, and the \"code\" button\n         to insert preformatted text.<br><h3>How to do Merge Sort</h3><pre>def mergeSort(arr)<br>  arr.sort # lol<br>end<br></pre><br> You can  create notebooks, tag\n          notes, search notes, swap a note's notebook or sticker, and a lot more. Click\n          around, make some notes, enjoy yourself.<p><br></p>",
  sticker: "leaf"
)




n2 = nb1.notes.create!(title: "Note A2", body: "Body of A2", sticker: "music")
n3 = nb2.notes.create!(title: "Note B1", body: "Body of B1", sticker: "bookmark")
n4 = nb2.notes.create!(title: "Note B2", body: "Body of B2", sticker: "heart")
n5 = nb3.notes.create!(title: "Note C1", body: "Body of C1", sticker: "moon-o")
n6 = nb3.notes.create!(title: "Note C2", body: "Body of C2", sticker: "calendar")


t1 = u1.tags.create!(label: "Everything")
t1.note_ids = [1,2,3,4,5,6]

t3 = u1.tags.create!(label: "Ones")
t3.note_ids = [1,3,5]

t4 = u1.tags.create!(label: "Twos")
t4.note_ids = [2,4,6]
