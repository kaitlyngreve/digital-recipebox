class RecipesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        recipes = Recipe.all
        render json: recipes, status: :ok
    end

    def show
        recipe = Recipe.find_by!(id: params[:id])
        render json: recipe, status: :ok
    end

    def create
        recipe = Recipe.create!(recipe_params)
        render json: recipe, status: :created
    end

    def destroy
        recipe = Recipe.find_by!(recipe_params)
        recipe.destroy!
        head :no_content
    end

    private

    def recipe_params
        params.permit(:title, :description, :measurements_ingredients, :directions, :img_url, :cuisine_id, :user_id)
    end

    def render_invalid_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: { error: "Recipe Not Found" }, status: :not_found
    end
end
