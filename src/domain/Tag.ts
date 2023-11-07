export class Tag{
    private _value: string;

    private constructor(value: string){
        this._value = value;
    }

    public static fromString(value: string): Tag{
        return new Tag(value);
    }
}