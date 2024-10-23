export class Collection<T> implements Iterable<T> {
    protected __items: Array<T> = [];

    constructor(items?:any) {
        if (items === undefined || items === null) {
            this.__items = [];
        }else{
            this.__items = items;
        }
    }

    * [Symbol.iterator]() {
        return this.__items.values;
    }

    get length(): number {
        return this.__items.length;
    }

    get count(): number {
        return this.__items.length;
    }


    /**
     * Get new instance of the class.
     */
    public newInstance(): Collection<T> {
        return new Collection<T>();
    }

    /**
     * Get item at given index
     * @return T
     */
    public getItem(index: number): T {
        return this.__items[index];
    }

    /**
     * Remove item from given index
     */
    public removeFromIndex(index: number): Collection<T> {
        this.__items.splice(index, 1);
        return this;
    }

    /**
     * Map the collection to new collection
     */
    public map<Q>(callbackFn: (value: T, index: number) => any): Collection<Q> {
        const ret = new Collection<Q>();
        this.__items.forEach((item: T, index: number) => {
            ret.push(callbackFn(item, index));
        });
        return ret;
    }

    /**
     * Get index of the given item
     */
    public getIndex(item: T, compareProperty?: string): number {
        if (compareProperty) {
            for (let i = 0; i < this.__items.length; i++) {
                let itm: any = this.__items[i];
                if (itm[compareProperty] === (item as any)[compareProperty]) {
                    return i;
                }
            }
            return -1;
        } else {
            return this.__items.indexOf(item);
        }
    }

    /**
     * add __items to array
     */
    public add(item: T, index: number = 0): void {
        if (index < 0 || index > this.__items.length) {
            index = this.__items.length;
        }
        this.__items.splice(index, 0, item);
    }


    /**
     * merge to array
     */
    public merge(items: Array<T>): Collection<T> {
        this.__items = [...this.__items, ...items]
        return this;
    }

    /**
     * Empty
     */
    public empty(): Collection<T> {
        this.__items = [];
        this.__items.length = 0;
        return this;
    }

    public all(): Array<T> {
        return this.__items;
    }

    /**
     * Iterate through the __items
     */
    public forEach(callbackFn: (value: T, index: number, array: T[]) => void): void {
        this.__items.forEach(callbackFn);
    }

    /**
     * Push item to the collection
     */
    public push(item: T): void {
        this.__items.push(item);
    }

    /**
     * Pop item
     */
    public pop(): T | undefined {
        return this.__items.pop();
    }

    /**
     * Get first item for the callback satisfied true value
     */
    public first(callbackFn: (obj: T) => boolean): T | undefined {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.__items.length; i++) {
            if (callbackFn(this.__items[i])) {
                return this.__items[i];
            }
        }
        return undefined;
    }

    public where(callbackFn: (obj: T) => boolean): Collection<T> {
        const ret = this.newInstance();
        this.__items.forEach(element => {
            if (callbackFn(element)) {
                ret.push(element);
            }
        });
        return ret;
    }

    public remove(fn: (obj: T) => boolean): Collection<T> {
        for (let i = 0; i < this.length; i++) {
            const result = fn(this.__items[i]);
            if (result) {
                this.__items.splice(i, 1);
                i--;
            }
        }
        return this;
    }

    /**
     * Sort the __items
     */
    public sort(compareFn?: (a: T, b: T) => number): Collection<T> {
        this.__items = this.__items.sort(compareFn);
        return this;
    }

    public toJsonString(): string {
        return JSON.stringify(this.__items);
    }
}