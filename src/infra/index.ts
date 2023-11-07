import { v4 as uuid } from 'uuid';
import { EntityId } from "../domain/EntityId";
import { Post } from '../domain/Post';
import { Author } from '../domain/Author';
import { Tag } from '../domain/Tag';

const postId = EntityId.fromString(uuid());
console.log(postId);

const post = Post.create(
    postId,
    "DDD by Examples",
    Author.create(EntityId.fromString(uuid()), "Eric Evans"),
    "Some cool examples of Domain-Driven Design",
    [Tag.fromString("ddd"), Tag.fromString("domain-driven-design")]
);

post.publish();
console.log(post);