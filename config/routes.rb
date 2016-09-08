Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update, :destroy] do
      resources :spots, only: [:create, :destroy]
      resources :reviews, only: [:index, :create, :show, :destroy]
    end
    resource :session, only: [:create, :destroy, :show]
    resources :spots, only: [:index, :show] do
      resources :bookings, only: [:index, :create, :show, :update]
      resources :reviews, only: [:index, :create, :show, :destroy]
    end

    resources :photos, only: [:index, :create, :show, :destroy]
  end

  root "static_pages#root"
end
