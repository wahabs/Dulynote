Rails.application.routes.draw do
  root to: 'static_pages#root'
  resources :users, only: [:create, :new, :destroy]
  resource :session, only: [:create, :new, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :notebooks, only: [:index, :create, :show, :destroy]
  end

end
