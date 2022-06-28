class UsersController < ApplicationController

    def index
        users = User.all 
        render json: users, status: :ok
    end

    def show
        user = User.find_by!(id: params[:id])
        render json: user, status: :ok
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def destroy
        user = User.find_by!(id: params[:id])
        user.destroy!
        head :no_content, status: :ok
    end

    private

    def user_params
        params.permit(:username, :password, :bio)
    end

    def render_not_found_response
        render json: { error: "User Not Found" }, status: :not_found
    end
end
