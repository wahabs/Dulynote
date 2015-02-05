class Api::TagsController < ApplicationController

  def index
  end

  def create
  end

  def show
  end

  def destroy
  end

  private

    def tag_params
      params.require(:tag).permit(:label)
    end

end
