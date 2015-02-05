class Api::TagsController < ApplicationController

  before_action :ensure_logged_in

  def index
    @tags = Tag.all
    render json: @tags
  end

  def create
    @note = Note.find(params[:note][:id])
    @tag = @note.tags.new(tag_params)
    if @tag.save
      render json: @tag
    else
      render json: @tag.errors.full_messages, status: 422
    end
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
