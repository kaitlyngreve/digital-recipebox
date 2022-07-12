Rails.application.routes.draw do
  resources :likes, only: [:index, :create]
  resources :cuisines, only: [:index, :show, :create]
  resources :recipes
  # resources :users, only: [:index, :create, :destroy]

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  get '/users', to: 'users#index'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

    get '/hello', to: 'application#hello_world'

    get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
end
