u1 = User.create!(email: 'user@dulynote.com', password: 'vat9oryqbo0ater')

nb1 = u1.notebooks.create!(title: "Dulynote Demo")
nb2 = u1.notebooks.create!(title: "Programming Notes")
nb3 = u1.notebooks.create!(title: "Random")


n1 = nb1.notes.create!(
  title: "Hello.",
  body:  "Click on my title, body, and/or sticker to edit!<p><br>Highlight\n         some text and click one of the navbar buttons to apply formatting.\n         </p><p>We can <b>bold, </b><i> i<i>talicize, </i></i>and<i><i>\n         </i></i> <u>underline</u>. The eraser removes this type of formatting.\n         &nbsp;</p><ol><li>Here's a</li><li>numbered list</li><li>just for you!\n         </li></ol><ul><li>But what about</li><li>all these</li><li>bullets though?\n         </li></ul>Use the text resize button to create headers, and the \"code\" button\n         to insert preformatted text.<br><h3>How to do Merge Sort</h3><pre>def mergeSort(arr)<br>  arr.sort # lol<br>end<br></pre><br> You can  create notebooks, tag\n          notes, search notes, swap a note's notebook or sticker, and a lot more. Click\n          around, make some notes, enjoy yourself.<p><br></p>",
  sticker: "star"
)

n2 = nb1.notes.create!(
  title: "Credits",
  body: "Body of B2",
  sticker: "bookmark"
)

n3 = nb2.notes.create!(
  title: "Ruby Procs",
  body: "<p>Ruby isn't really made with functional programming in mind, but it can still be simulated via procs/blocks and lambdas. They are called closures in other languages, because they enclose variables in their immediate non-local scope. Think of a Proc object as an anonymous method, i.e. a section of code that can be passed around and called from other methods. A block is the code written in the Proc, the Proc is the actual object. Here's an example:</p><pre>class Array<br>&nbsp;&nbsp;def iterate(prc)<br>&nbsp;&nbsp;&nbsp; self.each_with_index do |el, i|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; self[i] = prc.call(el)<br>&nbsp;&nbsp;&nbsp; end<br>&nbsp; end<br>end<br><br>my_array = [0, 1, 2, 3]<br>cube = Proc.new { n ** 3 }<br><br>puts my_array.iterate(cube) # =&gt; [0, 1, 8, 27]</pre><p><i><b>Note: <i></i></b></i>This is a good resource:&nbsp;https://www.youtube.com/watch?v=VBC-G6hahWA</p><p><br></p>",
  sticker: "diamond"
)

n4 = nb2.notes.create!(
  title: "HTTP State/Sessions",
  body:   "<h3>Protocol State<br></h3><p>HTTP is a <i>stateless protocol,</i> meaning that each request a client makes is independent of any other request (i.e. no information is carried across requests). While this simplicity allows for simplicity/optimization, it presents the problem of keeping track of certain necassary constants. For example, if on Amazon a user logs in and then requests their shopping cart, we need some way to keep track of the user so that we know which shopping cart to display. We do this by storing a <i>session</i>, which is just a resource that contains information about a user.</p><h3>Saving a session can be done by...</h3><ul><li>Store the data in an HTTP cookie: this is the default. A simple way to implement  this is to store a random string in the Rails `session` hash.</li><li>Store all session data in the server's database. Instead of setting the cookie with the data, only send the database key (the id of the session data in the database) to the client. On subsequent requests the client ships the key. Rails looks up this key in the database when session data is requested.</li><li>Store the data in the Rails cache.</li></ul><b>Source:</b>&nbsp;http://guides.rubyonrails.org/action_controller_overview.html#session",
  sticker: "paper-plane"
)

n5 = nb3.notes.create!(
  title: "Shopping List",
  body: "<ul><li>Milk</li><li>Eggs<ul><li>dsfsdf</li></ul></li><li>Cheese<ul><li>dfdf </li></ul></li><li>Yogurt</li><li></li></ul>",
  sticker: "money"
)


n6 = nb3.notes.create!(title: "Note C2", body: "Body of C2", sticker: "calendar")


t1 = u1.tags.create!(label: "Everything")
t1.note_ids = [1,2,3,4,5,6]

t3 = u1.tags.create!(label: "Ones")
t3.note_ids = [1,3,5]

t4 = u1.tags.create!(label: "Twos")
t4.note_ids = [2,4,6]
