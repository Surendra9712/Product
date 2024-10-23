import { BaseModel } from "./base-model";
import { IEnsueStorage } from "./i-ensue-storage";
import {User} from "../../commons/models/user";

export class EnsueSession {
    public constructor (
        private __storage: IEnsueStorage,
        private __userStoreKey: string,
        private __authModel: BaseModel,
        private __tokenInfoKey: string,
    ) {

    }

    public setUser<T extends BaseModel>(user: T): void {
        this.__storage.setItem(this.__userStoreKey, user.toJson());
    }

    public getUser<T extends BaseModel>(): User | null {
        try {
            const str = this.__storage.getItem(this.__userStoreKey);
            if (str === null || str === undefined || str === '') {
                return null;
            }
            const obj = JSON.parse(str);
            return this.__authModel.create(obj) as User;
        } catch(e) {
            return null
        }
    }
    
    public removeUser(): void {
        this.__storage.removeItem(this.__userStoreKey);
    }

    public setAccessToken(token: string): void {
      this.__storage.setItem(this.__tokenInfoKey, token);
    }

    public getAccessToken(): string | null {
      return this.__storage.getItem(this.__tokenInfoKey);
    }

    public clearSession(): void {
        this.__storage.removeItem(this.__userStoreKey);
        this.__storage.removeItem(this.__tokenInfoKey);
    }

}
