Rails.application.routes.draw do
  get 'sign-up' => 'base#sign_up'
  get 'gigs' => 'base#gigs'
  get 'listing' => 'base#listing'
  root 'base#index'
end
