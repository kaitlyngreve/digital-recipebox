Rails.application.routes.draw do
  resources :cuisines, only: [:index, :show, :create]
  resources :recipes
  resources :users, only: [:index, :show, :create, :destroy]

    get '/hello', to: 'application#hello_world'

    get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
end
