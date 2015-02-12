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
      redirect_to main_url
    else
      @user = User.new
      flash.now[:errors] ||= []
      flash.now[:errors] << "Invalid credentials"
      render :new, status: 422
    end
  end

  def destroy
    log_out_user!
    redirect_to root_url
  end

end
