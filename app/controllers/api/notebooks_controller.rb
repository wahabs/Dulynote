class Api::NotebooksController < ApplicationController

  def index
    @notebooks = current_user.notebooks
    render json: @notebooks
  end

  def create

  end

  def show

  end

  def destroy

  end

  private

    def notebook_params
      params.require(:notebook).permit(:title, :ord, :user_id)
    end

end
