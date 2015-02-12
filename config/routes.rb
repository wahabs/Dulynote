Rails.application.routes.draw do
  root to: 'static_pages#root'
  get 'main', to: "static_pages#main"
  resources :users, only: [:create, :new, :destroy]
  resource :session, only: [:create, :new, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :notebooks
    resources :notes do
      resources :tags, only: [:destroy]
    end
    resources :tags
  end

end
