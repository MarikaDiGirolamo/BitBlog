import { EntityId } from "./EntityId";
import { Post } from "./Post";

export interface PostRepository {
    save(post: Post): void;
    getById(id: EntityId): Post;
    nextIdentity(): EntityId;
}