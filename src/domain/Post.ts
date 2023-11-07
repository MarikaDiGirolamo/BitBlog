import { Author } from "./Author";
import { EntityId } from "./EntityId";

export class Post {
    private _id: EntityId;
    private _title: string;
    private _author: Author;
    private _text?: string = "";
    private _isDraft: boolean = true; 

    private constructor(id: EntityId, title: string, author: Author) {
      this._id = id;
      this._title = title;
      this._author = author;  
    }

    public static create(id: EntityId, title: string, author: Author, text?: string) {
        let instance = new Post(id, title, author);
        instance._text = text;
        return instance;
    }

    public publish() {
        if (this._text === undefined || this._text?.trim().length === 0) {
            throw new Error("Could not publish an article with empty text.");
        }
        this._isDraft = false;
    }

    public id(): EntityId {
        return this._id;
    }

    public isPublished(): boolean {
        return !this._isDraft;
    }
}