class StaticPagesController < ApplicationController

  def root
    render :root
  end

  def main
    render :main
  end

end
