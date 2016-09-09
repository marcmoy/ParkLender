Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update, :destroy] do
      resources :spots, only: [:create, :destroy]
      resources :reviews, only: [:index, :create, :show, :destroy]
    end
    resource :session, only: [:create, :destroy, :show]
    resources :spots, only: [:index, :show] do
      resources :bookings, only: [:create, :show, :update, :destroy]
      resources :reviews, only: [:index, :create, :show, :destroy]
    end
    resources :bookings, only: [:index]
    resources :photos, only: [:index, :create, :show, :destroy]
  end

  root "static_pages#root"
end
