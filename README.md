# Dulynote

[Dulynote][site] is a minimalist note taking app built on Rails and Backbone. It was
primarily inspired by [Evernote](https://evernote.com/).

You can check it out at http://www.dulynote.io/.

## Features

Dulynote allows users to:

* Create notes, tags, and notebooks
* Format their notes using rich-text styling
* Organize notes into notebooks and easily swap the notebook for a specific note
* Create multiple tags for notes, and search for notes via the tags
* Add a [Font-Awesome](http://fortawesome.github.io/Font-Awesome/) sticker header to any note
* Dynamically search for notes under any notebook or tag

## Design

From the user interface to the source code, Dulynote's philosophy is to be as lucid
and minimalist as possible. The server-side API uses just three controllers – Notes, Tags, and Notebooks – and the processing of model relationships is handled on the client-side. Relying
heavily on Backbone [composite views](https://github.com/thoughtbot/backbone-support), Dulynote displays the interface for notes, notebooks, and tags on a single page. When one model-view is changed, the rest update accordingly.

Plugins used:
* [Aloha Text Editor](http://www.alohaeditor.org/Content.Node/index.html) for the note editing form
* [jQuery-Cookie](https://github.com/carhartl/jquery-cookie) to track recent note edits so that specific Backbone views are preserved across sessions
* [Hideseek](http://vdw.github.io/HideSeek/) for live-searching of notes

## Additional Features (to be added)

* Clickable 'favorite' tag for notes
* Ability to sort notes and notebooks via custom order
* Ability to show a note's related notes (i.e. notes with similar text content)
* Support for multiple open sessions

[site]: http://www.dulynote.io/

## License
Dulynote is released under the [MIT License][license]

[license]: ./LICENSE
