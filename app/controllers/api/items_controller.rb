class Api::ItemsController < ApplicationController
  before_action :set_menu
  before_action :set_item, only: [:update, :destroy]

  def index
    render json: @menu.items
  end

  def create
    item = Item.new(params.require(:item).permit(:name, :description, :price, :available, :menu_id))
    if item.save
      render json: item
    else
      render json: {errors: item.errors}
    end
  end

  def update
    item.update(:available, :name, :description, :price)
    render json: item
  end

  def destroy
    item.destroy
    render json: {message: 'Item deleted'}
  end

  private
  
    def set_menu
      @menu = Menu.find(params[:menu_id])
    end

    def set_item
      item = Item.find(params[:id])
    end
end
