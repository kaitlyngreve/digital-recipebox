class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authorize
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
    def authorize
      @current_user = User.find_by(id: session[:user_id])
      # debugger
      render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
    end

    def render_invalid_response(exception)
      render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
      end
      
end
