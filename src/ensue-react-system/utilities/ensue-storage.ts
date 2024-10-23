export class EnsueStorage implements EnsueStorage {
    private __storage = localStorage;

    public constructor(
        private readonly __prefix: string
    ){
        if (!this.__prefix) {
            this.__prefix = "";
        }
    }

    private __getKey(key: string): string {
        return `${this.__prefix}.${key}`;
    }

    public setItem(key: string, value: string): void {
        this.__storage.setItem(this.__getKey(key), value);
    }

    public getItem(key: string): string | null {
        return this.__storage.getItem(this.__getKey(key));
    }
    
    public removeItem(key: string): void {
        this.__storage.removeItem(this.__getKey(key));
    }

}