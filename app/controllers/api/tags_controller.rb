class Api::TagsController < ApplicationController

  before_action :ensure_logged_in

  def index
    @tags = current_user.tags
    render json: @tags
  end

  def show
    @tag = Tag.includes(:notes).find(params[:id])
    render :show
  end

  def destroy
    @tag = Tag.find(params[:id])
    @tag.destroy
    render json: {}
  end

  private

    def tag_params
      params.require(:tag).permit(:label)
    end

end
