require_relative '../../../db/users'

class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    @user.username.downcase!
    @user.fname.downcase!
    @user.lname.downcase!
    @user.email.downcase!
    # @user.confirm = params[:user][:confirm]

    if @user.save
      login(@user)
      Photo.create!(user_id: @user.id, url: DEFAULT_PIC, thumbnail: DEFAULT_PIC)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = current_user
    if @user.update(user_params)
      photo = Photo.find_by_user_id(@user.id)
      photo.update!(
        url: params[:user][:imageUrl],
        thumbnail: params[:user][:thumbnail]
      )
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :username,
      :password,
      # :confirm,
      :email,
      :fname,
      :lname
    )
  end

end
