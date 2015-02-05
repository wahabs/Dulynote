# Phase 1: User Authentication, Basic Notebooks and Notes

## Rails
### Models
* User
* Notebooks
* Notes
* Tags
* Taggings

### Controllers
* UsersController (create, new)
* SessionsController (create, new, destroy)
* API::NotebooksController (index, create, show, destroy)
* API::NotesController (index, create, show, update, destroy)
* API::TagsController (index, create, show, destroy)
* API::TaggingsController (create, destroy)

### Views
* root.html.erb
* users/new.html.erb
* session/new.html.erb

## Backbone
### Models
* Notebook
* Note
* Tag

### Collections
* Notebooks
* Notes
* Tags

### Views
* NotebookIndex
* NotebookIndexItem
* NotebookShow
* NoteShow

## Gems/Libraries
