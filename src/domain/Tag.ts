export class Tag{
    private _value: string;

    private constructor(value: string){
        if(!this.isValidInput(value.trim())){
            throw new Error("Invalid Tag");
        }
        this._value = value.trim();
    }

    public static fromString(value: string): Tag{
        return new Tag(value);
    }

    private isValidInput(value: string): boolean {
        
        if (value.length < 3) {
            return false;
        }

        const pattern = "^[A-Za-z0-9-]+$";
        const regex = new RegExp(pattern);

        if (!regex.test(value)) {
        return false;

        }

        if (value.slice(0, 3).indexOf("-") !== -1) {
            return false;
        }

        return true; 
    }
}