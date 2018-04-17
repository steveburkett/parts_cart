Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :parts, only: [:index, :create, :destroy, :update]
  end

  root to: 'pages#home'
end
