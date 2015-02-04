class Api::NotebooksController < ApplicationController

  def index
    @notebooks = current_user.notebooks
    render json: @notebooks
  end

  def create

  end

  def show
    @notebook = Notebook.find(params[:id])
    render "api/notebooks/show"
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
