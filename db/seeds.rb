unless User.all.length > 1

  demo_user = User.create!(email: 'user@dulynote.com', password: 'vat9oryqbo0ater')

  nb1 = demo_user.notebooks.create!(title: "Demo")
  nb2 = demo_user.notebooks.create!(title: "Programming Notes")
  nb3 = demo_user.notebooks.create!(title: "Stuff to Read")

  n1 = nb1.notes.create!(
    title: "Hello.",
    body:  "Click on my title, body, and/or sticker to edit! If you want to save changes, click the save button on the navbar above.<p><br>Highlight\n         some text and click one of the navbar buttons to apply formatting.\n         </p><p>We can <b>bold, </b><i> i<i>talicize, </i></i>and<i><i>\n         </i></i> <u>underline</u>. The eraser removes this type of formatting.\n         &nbsp;</p><ol><li>Here's a</li><li>numbered list</li><li>just for you!\n         </li></ol><ul><li>But how about</li><li>all these</li><li>bullets though?\n         </li></ul>Use the text resize button to create headers, and the \"code\" button\n         to insert preformatted text.<br><h3>How to do Merge Sort</h3><pre>def mergeSort(arr)<br>  arr.sort # lol<br>end<br></pre><br> You can  create notebooks, tag\n          notes, search notes, swap a note's notebook or sticker, and a lot more. Click\n          around, make some notes, enjoy yourself.<p><br></p>",
    sticker: "star"
  )

  n2 = nb1.notes.create!(
    title: "Shopping List",
    body: "<ul><li>Milk<ul><li>1 gallon whole, 2 gallons 2%</li></ul></li><li>Eggs</li><li>Cheese<ul><li>Cheddar or pepper jack</li><li>Cottage</li></ul></li><li>Greek yogurt</li><li>Paper towels</li><li>Trash bags</li><li>Kitchen cleaning stuff</li></ul>",
    sticker: "money"
  )

  n3 = nb1.notes.create!(
    title: "Chicken Cacciatore",
    body: "<p></p><h3>Ingredients</h3><ul><li>Pasta and bread, to serve</li><li>¼ cup fresh basil</li><li>1 tablespoon brined capers, drained</li><li>½ teaspoon sugar</li><li>Crushed red pepper, to taste</li><li>3 garlic cloves, thinly sliced</li><li>10 pearl onions, peeled</li><li>¼ teaspoon each dried basil</li><li>¼ teaspoon dried thyme</li><li>½ teaspoon dried oregano</li><li>½ teaspoon dried parsley</li><li>1 tablespoons balsamic vinegar</li><li>1 tablespoon tomato paste</li><li>⅔ cup chicken stock</li><li>1 small orange bell pepper, sliced</li><li>1 small red bell pepper, sliced</li><li>1.5 lbs tomatoes (I like using various sizes and colors of tomato)</li><li>2 tablespoons olive oil</li><li>2 tablespoons butter</li><li>⅓ cup all purpose flour</li><li>Salt and pepper, to taste</li><li>4 chicken thighs, bone-in and skin intact</li></ul><h3>Directions</h3><ol><li>Preheat oven to 350 degrees F.</li><li>\nSeason the chicken thighs with salt and pepper. Dredge in the flour and shake off the excess. Set aside.</li><li>\nHeat the butter and olive oil in an oven-safe skillet or dutch oven over medium-high heat. Brown the chicken all over and then remove to a plate.\n</li><li>In a blender, combine half of the tomatoes, half of the peppers, the chicken stock, the tomato paste, the balsamic vinegar, and the dried herbs. Pulse until smooth.</li><li>\nAdd the garlic and the pearl onions to the pan. Saute for a minute. Add in the remaining peppers and tomatoes. Saute for an additional minute. Pour in the tomato broth mixture and stir in the sugar and capers. Season with salt, pepper, and crushed red pepper, to taste. Bring to a boil.</li><li>Reduce to a simmer and add the chicken back to the pan, placing it on top of the tomatoes, peppers, and onions so that it is only partially submerged in the broth. </li><li>Cook for an additional minute and then transfer to the oven, uncovered, until chicken is cooked through and sauce has reduced. </li><li>Reduce to a simmer and mix in fresh basil. Serve with pasta and bread.</li></ol>",
    sticker: "cutlery"
  )

  n4 = nb2.notes.create!(
    title: "Ruby Procs",
    body: "<p>Ruby isn't really made with functional programming in mind, but it can still be simulated via procs/blocks and lambdas. They are called closures in other languages, because they enclose variables in their immediate non-local scope. Think of a Proc object as an anonymous method, i.e. a section of code that can be passed around and called from other methods. A block is the code written in the Proc, the Proc is the actual object. Here's an example:</p><pre>class Array<br>&nbsp;&nbsp;def iterate(prc)<br>&nbsp;&nbsp;&nbsp; self.each_with_index do |el, i|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; self[i] = prc.call(el)<br>&nbsp;&nbsp;&nbsp; end<br>&nbsp; end<br>end<br><br>my_array = [0, 1, 2, 3]<br>cube = Proc.new { n ** 3 }<br><br>puts my_array.iterate(cube) # =&gt; [0, 1, 8, 27]</pre><p><i><b>Note: <i></i></b></i>This is a good resource -&nbsp;https://www.youtube.com/watch?v=VBC-G6hahWA</p><p><br></p>",
    sticker: "diamond"
  )

  n5 = nb2.notes.create!(
    title: "HTTP State/Sessions",
    body:   "<h3>Protocol State<br></h3><p>HTTP is a <i>stateless protocol,</i> meaning that each request a client makes is independent of any other request (i.e. no information is carried across requests). While this simplicity allows for simplicity/optimization, it presents the problem of keeping track of certain necassary constants. For example, if on Amazon a user logs in and then requests their shopping cart, we need some way to keep track of the user so that we know which shopping cart to display. We do this by storing a <i>session</i>, which is just a resource that contains information about a user.</p><h3>Saving a session can be done by...</h3><ul><li>Store the data in an HTTP cookie: this is the default. A simple way to implement  this is to store a random string in the Rails `session` hash.</li><li>Store all session data in the server's database. Instead of setting the cookie with the data, only send the database key (the id of the session data in the database) to the client. On subsequent requests the client ships the key. Rails looks up this key in the database when session data is requested.</li><li>Store the data in the Rails cache.</li></ul><b>Source:</b>&nbsp;http://guides.rubyonrails.org/action_controller_overview.html#session",
    sticker: "paper-plane"
  )

  n6 = nb3.notes.create!(
    title: "If",
    body: "<i></i><p><br></p><p><i>If you can keep your head when all about you</i></p><p><i>Are losing theirs and blaming it on you,</i></p><p><i>   \nIf you can trust yourself when all men doubt you,\n</i></p><p><i>    But make allowance for their doubting too;</i></p><p><i>   \nIf you can wait and not be tired by waiting,</i></p><p><i>\n    Or being lied about, don’t deal in lies,</i></p><p><i>\nOr being hated, don’t give way to hating,</i></p><p><i>\n    And yet don’t look too good, nor talk too wise:</i></p><p><i>\n\nIf you can dream—and not make dreams your master;</i></p><p><i>   \n    If you can think—and not make thoughts your aim;</i></p><p><i>   \nIf you can meet with Triumph and Disaster</i></p><p><i>\n    And treat those two impostors just the same;</i></p><p><i>   \nIf you can bear to hear the truth you’ve spoken</i></p><p><i>\n    Twisted by knaves to make a trap for fools,</i></p><p><i>\nOr watch the things you gave your life to, broken,\n</i></p><p><i>    And stoop and build ’em up with worn-out tools:</i></p><p><i>\n\nIf you can make one heap of all your winnings\n</i></p><p><i>    And risk it on one turn of pitch-and-toss,</i></p><p><i>\nAnd lose, and start again at your beginnings</i></p><p><i>\n    And never breathe a word about your loss;</i></p><p><i>\n\nIf you can talk with crowds and keep your virtue</i></p><p><i> Or walk with Kings - nor lose the common touch,</i></p><p><i>\nIf neither foes nor loving friends can hurt you,</i></p><p><i>\n    If all men count with you, but none too much;</i></p><p><i>\nIf you can fill the unforgiving minute</i></p><p><i>With sixty seconds’ worth of distance run,&nbsp;</i></p><p><i>Yours is the Earth and everything that’s in it,</i></p><p><i>   \n    And—which is more—you’ll be a Man, my son!</i></p><p>- Rudyard Kipling</p><p><br></p>",
    sticker: "globe"
  )

  n7 = nb3.notes.create!(
    title: "Quotes",
    body: "<p><br></p><p><br></p><p>\"Do not be daunted by the enormity of the world's grief. Do justly, now. Love mercy, now. Walk humbly, now. You are not obligated to complete the work, but neither are you free to abandon it.\" - <b>Talmud</b></p><p><br></p><p>\"If you want to build a ship, don’t drum up the men to gather wood, divide the work, and give orders. Instead, teach them to yearn for the vast and endless sea.\" -&nbsp;<i style=\"font-style: normal;\"><b>Antoine de Saint-Exupéry</b></i></p><p><br></p><p>\"It is to the credit of human nature, that, except where its selfishness is brought into play, it loves more readily than it hates. Hatred, by a gradual and quiet process, will even be transformed to love, unless the change be impeded by a continually new irritation of the original feeling of hostility.\" - <b>Nathaniel Hawthorne, <b><i>The Scarlet Letter</i></b></b></p>",
    sticker: "quote-left"
  )

  n8 = nb3.notes.create!(
    title: "Stopping by Woods",
    body: "<p><i><b>Stopping by <b><i>Woo<i><b>ds o<b><i>n a Snowy Evening<i><b> - </b></i></i></b></b></i></i></b></b></i><b><b>Robert Frost</b></b></p><p>Whose woods these are I think I know.</p><p>   \nHis house is in the village though;</p><p>   \nHe will not see me stopping here</p><p>   \nTo watch his woods fill up with snow. </p><p>  \n\nMy little horse must think it queer</p><p>   \nTo stop without a farmhouse near </p><p>  \nBetween the woods and frozen lake </p><p>  \nThe darkest evening of the year.</p><p>   \n\nHe gives his harness bells a shake</p><p>   \nTo ask if there is some mistake.</p><p>   \nThe only other sound’s the sweep</p><p>   \nOf easy wind and downy flake.</p><p>   \n\nThe woods are lovely, dark and deep,</p><p>   \nBut I have promises to keep,</p><p>   \nAnd miles to go before I sleep, </p><p>  \nAnd miles to go before I sleep.</p>",
    sticker: "moon-o"
  )

  notes = demo_user.notes

  t1 = demo_user.tags.create!(label: "Everything!")
  t1.notes = notes

  t2 = demo_user.tags.create!(label: "Todo")
  t2.notes = [notes[0], notes[1], notes[3]]

  t3 = demo_user.tags.create!(label: "Inspiration")
  t3.notes = [notes[5], notes[6]]

end
