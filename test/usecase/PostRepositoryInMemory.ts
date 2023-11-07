import { v4 as uuid } from 'uuid';
import { EntityId } from "../../src/domain/EntityId";
import { Post } from "../../src/domain/Post";
import { PostRepository } from "../../src/domain/PostRepository";

export class PostRepositoryInMemory implements PostRepository {
    private posts: Post[] = [];

    save(post: Post): void {
        const index = this.posts.findIndex((currPost: Post) => currPost.id().equals(post.id()));
        if (index === -1) {
            this.posts.push(post);
            return;
        }
        this.posts[index] = post;
    }

    getById(id: EntityId): Post {
        const index = this.posts.findIndex((currPost: Post) => currPost.id().equals(id));
        if (index === -1) {
            throw new Error("Could not find post with id " + id.asString());
        }
        return this.posts[index];
    }

    nextIdentity(): EntityId {
        return EntityId.fromString(uuid());
    }
}