class RecipesController < ApplicationController

    def index
        recipes = Recipe.all
        render json: recipes, status: :ok
    end

    def show
        recipe = find_recipe
        render json: recipe, status: :ok
    end

    def create
        recipe = Recipe.create!(recipe_params)
        render json: recipe, status: :created
    end

    def update
        recipe = find_recipe
        recipe.update!(recipe_params)
        render json: recipe, status: :ok
    end

    def destroy
        recipe = find_recipe
        recipe.destroy!
        head :no_content
    end

    private

    def recipe_params
        params.permit(:title, :description, :measurements_ingredients, :directions, :img_url, :cuisine_id, :user_id, :like)
    end

    def find_recipe
        Recipe.find_by!(id: params[:id])
    end

    def render_not_found_response
        render json: { error: "Recipe Not Found" }, status: :not_found
    end
end
