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

  def create
    @tag = current_user.tags.new(tag_params)
    if @tag.save
      @tag.note_ids = [params[:note_id]] if params[:note_id]
      render json: @tag
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def update
    @tag = Tag.find(params[:id])
    if @tag.update(tag_params)
      @tag.note_ids += [params[:note_id]] if params[:note_id]
      render json: @tag
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def destroy
    @tag = Tag.find(params[:id])

    # if the tag has multiple notes and a note_id is received with the destroy
    # request, don't destroy the tag but the tagging
    if params[:note_id] && @tag.notes.length > 1
      @tag.note_ids -= [params[:note_id].to_i]
    else
      @tag.destroy
    end

    render json: {}
  end

  private

    def tag_params
      params.require(:tag).permit(:id, :label)
    end

end
