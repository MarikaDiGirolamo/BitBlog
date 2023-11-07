import { PublishPost } from "../../src/app/PublishPost";
import { Author } from "../../src/domain/Author";
import { EntityId } from "../../src/domain/EntityId";
import { Post } from "../../src/domain/Post"
import { PostRepositoryInMemory } from "./PostRepositoryInMemory";

const author = Author.create(EntityId.fromString("086150f2-750e-4a09-b2a2-12b43e28f400"), "John Snow");
const postRepository = new PostRepositoryInMemory();
const publishPostService = new PublishPost(postRepository);

test('Publish an unpublished post', () => {
  // Given an unpublished post
  const post = Post.create(
    postRepository.nextIdentity(),
    "Never forget what you are.",
    author,
    "The rest of the world will not. Wear it like armor, and it can never be used to hurt you."
    
  );

  // When the post is published
  publishPostService.execute(post);

  // Then the post is correctly published
  const reloadedPost = postRepository.getById(post.id());
  expect(reloadedPost.isPublished()).toBeTruthy();
});