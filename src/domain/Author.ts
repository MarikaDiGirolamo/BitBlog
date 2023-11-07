import { EntityId } from "./EntityId";

export class Author {
    private _id: EntityId;
    private _name: string;

    private constructor(id: EntityId, name: string) {
        this._id = id;
        this._name = name;
    }

    public static create(id: EntityId, name: string): Author {
        return new Author(id, name);
    }

    public id(): EntityId {
        return this._id;
    }

    public name(): string {
        return this._name;
    }
}