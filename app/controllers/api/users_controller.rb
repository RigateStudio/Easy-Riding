class Api::UsersController < Api::BaseController

  before_action :find_user, only: [:show, :update]

  def show
    render_jsonapi_response(@user)
  end

  def update
    @user.update(user_params)
    @user.avatar.attach(params[:avatar]) if params[:avatar]
    render_jsonapi_response(@user)
  end

  private

  def find_user
    @user = User.find(params[:id])
  end

  def user_params
    params.permit(
      :email,
      :first_name,
      :last_name,
      :username,
      :phone_number,
      :password,
      :description,
      )
  end

end
