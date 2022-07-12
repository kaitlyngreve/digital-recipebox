class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def index
        users = User.all 
        render json: users, status: :ok
    end

    def show
        render json: @current_user
    end

    def create
        # debugger
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def destroy
        user = User.find_by!(id: params[:id])
        user.destroy!
        head :no_content, status: :ok
    end

    private

    def user_params
        params.permit(:username, :password, :bio, :password_confirmation)
    end

    def render_not_found_response
        render json: { error: "User Not Found" }, status: :not_found
    end
end
