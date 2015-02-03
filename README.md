# Evernote Clone (name pending)

[Heroku link (pending)][heroku]

[heroku]: n/a

## Minimum Viable Product
Evernote Clone (name pending) is a clone of Evernote built on Rails and Backbone. Users can:

- [ ] Create accounts
- [ ] Create sessions (log in)
- [ ] Create, delete, and view notebooks
- [ ] Create, update, delete, and view notes
- [ ] Sort notes and notebooks by any order
- [ ] Tag notes
- [ ] Search for notes by name or tag

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Basic Notebooks and Notes (~1 day)
I will implement user authentication in Rails based on the practices learned at
App Academy. By the end of this phase, users will be able to create notebooks and
notes using simple text forms in Backbone views. The most important part of this
phase will be pushing the app to Heroku and ensuring that everything works
before moving on to phase 2.

[Details][phase-one]

### Phase 2: Client-side routes and views (~1 day)
I will add API routes to serve note and notebook data as JSON, and use the Backbone
models and collections to fetch data from those routes. By the end of this
phase, the client will be able to update/fetch/sync data and update the basic views accordingly.

[Details][phase-two]

### Phase 3: Editing and showing notes, improving views (~2 days)
I plan to use third-party libraries to add functionality to the `NoteForm` and
`NoteShow` views in this phase. First I'll need to add a Markdown editor to the
`NoteForm`, and make sure that the Markdown is properly escaped and formatted in
the `NoteShow` view. I plan to integrate Filepicker for file upload so
users can add images to blog posts.

I will also improve the views - I intend to have the note form and live preview side by side,
a la [StackEdit](https://stackedit.io/editor), and have the Notebooks Index and Notebook Show
accessible via a left sidebar that hides unless the mouse is on the left part of the screen. Finally, I will add a navbar for simple site navigation.

[Details][phase-three]

### Phase 4: Searching for Notes via Title or Tag (~2 days)
I'll need a `search` route that accepts a query in the params. The controller
action will run a query to find notes where the `title` matches the search term.
In Backbone, I plan to implement a `SearchNotes` view (similar to `NotebookShow`) that will display matching notes. I will also have a Tag Form and Tag Show that will be displayed on the `note_show` template, such that a user can create a tag, and then click on that tag to retrieve a `SearchNotes`
that has all other notes with that tag.

[Details][phase-four]

### Phase 5: Dragging and Dropping to Sort (~1 day)

I plan on using jQuery UI Sortable to allow a user to drag and drop notes within a NotebookShow
as well as notebooks within a NotebookIndex. Dragging and dropping will change the `ord` attribute
of the respective model, and the views will update themselves accordingly.

[Details][phase-five]

### Phase 6: Styling and Bonus Features (~3 days)
The final phase will be devoted to styling with Bootstrap and implementing
as many bonus features as possible.


### Bonus Features (TBD)
- [ ] Clickable 'favorite' tag for notes
- [ ] Ability to show a note's related notes (i.e. notes with similar text content)
- [ ] Notebook picture labels
- [ ] Support for multiple open sessions

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
