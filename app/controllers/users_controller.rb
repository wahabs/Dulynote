class UsersController < ApplicationController

  before_action :ensure_logged_in, only: :destroy

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      log_in_user!(@user)
      redirect_to root_url
    else
      flash[:errors] ||= []
      flash.now[:errors] << @user.errors.full_messages
      render :new
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    log_out_user!
  end

  private

    def user_params
      params.require(:user).permit(:email, :password)
    end

end
