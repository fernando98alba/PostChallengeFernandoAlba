require "test_helper"

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test "Should provide a name" do
    @post = Post.new
    @post.description = "New description"
    assert_not @post.save 
  end

  test "Should provide a description" do
    @post = Post.new
    @post.name = "New name"
    assert_not @post.save 
  end

  test "Should save" do
    @post = Post.new
    @post.name = "New name"
    @post.description = "New description"
    assert @post.save 
  end

end
