class CuisinesController < ApplicationController

    def index
        cuisines = Cuisine.all 
        render json: cuisines, status: :ok
    end

    def show
        cuisine = Cuisine.find_by!(id: params[:id])
        render json: cuisine, status: :ok
    end

    def create
        cuisine = Cuisine.create!(cuisine_params)
        render json: cuisine, status: :created
    end

    private

    def cuisine_params
        params.permit(:cuisine_type, :description)
    end

end
