import { validate as uuidValidate } from 'uuid';

export class EntityId {
    private value: string;

    private constructor(value: string) {
        if (!uuidValidate(value)) {
            throw new Error("Invalid uuid");
        }
        this.value = value;
    }

    public static fromString(value: string): EntityId {
        return new EntityId(value);
    }

    public asString(): string {
        return this.value;
    }

    public equals(id: EntityId): boolean {
        return this.value === id.asString();
    }
}