class Api::NotesController < ApplicationController

  def index
    # if params[:notebook], get that notebook's notes?
    @notes = current_user.notes
    render json: @notes
  end

  def create
    @note = current_notebook.notes.new(note_params)
    if @note.save
      render json: @note
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def show
    @note = Note.find(params[:id])
    # need to include tags
    render :show
  end

  def update
    @note = Note.find(params[:id])
    if @note.update(note_params)
      render json: @note
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def destroy
    @note = Note.find(params[:id])
    @note.destroy
    render json: {}
  end

  private

    def current_notebook
      if params[:id]
        @note = Note.find(params[:id])
        @notebook = @note.notebook
      elsif params[:note]
        @note = Notebook.find(params[:note][:notebook_id])
      end
    end

    def note_params
      params.require(:note).permit(:title, :body, :ord, :notebook_id)
    end

end
