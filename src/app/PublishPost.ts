import { Post } from "../domain/Post";
import { PostRepository } from "../domain/PostRepository";

export class PublishPost {
    private postRepository: PostRepository;

    constructor(postRepository: PostRepository) {
        this.postRepository = postRepository;
    }

    // TODO Use Command
    public execute(post: Post): void {
        if (post.isPublished()) {
            return;
        }

        try {
            post.publish();
            this.postRepository.save(post);
        } catch (error) {
            // TODO handle error
            throw error;
        }
    }    
}