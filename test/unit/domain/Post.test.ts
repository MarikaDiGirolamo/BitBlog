import { v4 as uuid } from 'uuid';
import { EntityId } from "../../../src/domain/EntityId";
import { Post } from "../../../src/domain/Post";
import { Author } from '../../../src/domain/Author';

const postWithEmptyText = () => {
    const post = Post.create(
        EntityId.fromString(uuid()),
        "Some cool title",
        Author.create(EntityId.fromString(uuid()), "John")
    );
    post.publish();
}

test("Can't be published with empty text", () => {
  expect(() => postWithEmptyText()).toThrow(Error);
});