class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?, :brand_link
  protect_from_forgery with: :exception

  def current_user
    return nil unless session[:token]
    @current_user ||= User.find_by(session_token: session[:token])
  end

  def brand_link
    if request.original_url == root_url && logged_in?
      "/main#"
    elsif request.original_url != root_url
      "#"
    else
      root_url
    end
  end

  def log_in_user!(user)
    @current_user = user
    session[:token] = user.reset_session_token!
  end

  def log_out_user!
    current_user.reset_session_token!
    session[:token] = nil
  end

  def logged_in?
    !!current_user
  end

  def ensure_logged_in
    redirect_to new_session_url unless logged_in?
  end

end
