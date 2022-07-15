Rails.application.routes.draw do
  resources :likes, only: [:index, :create]
  resources :cuisines, only: [:index, :show, :create]
  resources :recipes
  resources :users

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  get '/users', to: 'users#index'
  # patch '/users/:id', to: 'users#update'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

    get '/hello', to: 'application#hello_world'

    get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
end
