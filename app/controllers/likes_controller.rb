class LikesController < ApplicationController

    def index 
        likes = Like.all 
        render json: likes, status: :ok
    end

    def create 
        like = Like.create!(like_params)
        render json: like, status: :created
    end

    private

    def like_params
        params.permit(:user_id, :recipe_id)
    end
end
