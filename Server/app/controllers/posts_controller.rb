class PostsController < ApplicationController
  # GET /posts
  def index
    @posts = Post.all

    render json: @posts
  end

  # POST /posts
  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post = Post.find(params[:id])
    if @post.destroy
      render json: @post, status: :ok
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  private

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:name, :description)
    end
end
