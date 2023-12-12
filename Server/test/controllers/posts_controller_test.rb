require "test_helper"

class PostsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @post = posts(:one)
  end

  test "should get index" do
    get posts_url, as: :json
    assert_response :success
  end

  test "should create post" do
    assert_difference("Post.count") do
      post posts_url, params: { post: { description: @post.description, name: @post.name } }, as: :json
    end

    assert_response :created
  end

  test "should not create post if missing name" do
    assert_no_difference("Post.count") do
      post posts_url, params: { post: { description: @post.description } }, as: :json
    end

    assert_response :unprocessable_entity
  end

  test "should not create post if missing description" do
    assert_no_difference("Post.count") do
      post posts_url, params: { post: { name: @post.name } }, as: :json
    end

    assert_response :unprocessable_entity
  end

  test "should destroy post" do
    assert_difference("Post.count", -1) do
      delete post_url(@post), as: :json
    end
    
    assert_response :ok
  end
end
