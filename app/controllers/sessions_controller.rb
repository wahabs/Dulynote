require 'byebug'
class SessionsController < ApplicationController

  before_action :ensure_logged_in, only: :destroy

  def new
    @user = User.new
    render "new"
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      log_in_user!(@user)
      render "static_pages/root"
    else
      @user = User.new
      flash.now[:errors] ||= []
      flash.now[:errors] << "Invalid credentials"
      render :new, status: 422
    end
  end

  def destroy
    log_out_user!
    redirect_to new_session_url
  end

  private

    def user_params
      params.require(:user).permit(:email, :password)
    end

end
