class Api::NotebooksController < ApplicationController

  def index
    @notebooks = current_user.notebooks
    render json: @notebooks
  end

  def create
    @notebook = current_user.notebooks.new(notebook_params)
    if @notebook.save
      render json: @notebook
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def show
    @notebook = Notebook.includes(notes: :tags).find(params[:id])
    render :show
  end

  def destroy
    @notebook = current_user.notebooks.find(params[:id])
    @notebook.try(:destroy)
    render json: {}
  end

  private

    def notebook_params
      params.require(:notebook).permit(:title, :ord, :user_id)
    end

end
