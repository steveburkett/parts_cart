class Api::PartsController < ApplicationController
  def index
    @parts = Part.all
    render json: { data: @parts }
  end

  def create
    @part = Part.create!(part_params)
    render json: { data: @part.reload }
  end

  def destroy
    @part = Part.find(params[:id])
    @part.destroy
    head :no_content
  end

  def update
    @part = Part.find(params["id"])
    @part.update_attributes(part_params)
    render json: { data: @part.reload }
  end

  private

  def part_params
    params.require(:part).permit(:id, :name, :description)
  end
end
