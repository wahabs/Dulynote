class StaticPagesController < ApplicationController
  before_action :ensure_logged_in, only: :main

  def root
    render :root
  end

  def main
    render :main
  end

end
