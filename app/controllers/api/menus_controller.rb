class Api::MenusController < ApplicationController
  before_action :set_menu, only: [:update, :destroy]

def index
  render json: Menu.all
end

def create
  menu = Menu.new(params.require(:menu).permit(:name))
  if menu.save
    render json: menu
  else
    render json: {errors: menu.errors }
  end
end

def update
  @menu.update(name: :name)
  render json: @menu
end

def destroy
  @menu.destroy
end

private
def set_menu
  @menu = Menu.find(params[:id])
end

end
