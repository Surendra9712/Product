import { Collection } from "./collection";
import { IJsonable } from "./ijsonalble";

export abstract class BaseModel implements IJsonable {
    //@ts-ignore
    private __publicProperties: string[] = [];
    //@ts-ignore
    protected constructor(props: {[key: string]: any} = null) {
    }
    
    private __generatePublicProperties(): void {
      const keys = Object.keys(this);
      for(let i = 0; i < keys.length; i++) {
        // This class has a set standard where public properties are defined without preceding underscores
        // If it has preceding underscore lets skip rest of the code
        if(/^_+.*$/.test(keys[i])) continue;
        // the property might be a function. Therefore we should see if the property is callable or not
        // If callable then we should skip it
        // @ts-ignore
        if (typeof this[keys[i]] === 'function') continue;
  
        this.__publicProperties.push(keys[i]);
      }
    }
    protected __setPublicPropertiesValues(props: {[key: string]: any}): void {
      for(let prop in props) {
        if (this.__hasPublicProperty(prop)) {
          //@ts-ignore
          this[prop] = props[prop];
        }
      }
    }
  
    // @ts-ignore
    protected __init(props: {[key: string]: any} | undefined | null = null ): void {
      this.__generatePublicProperties();
      if (props === null || props === undefined) return;
      this.__setPublicPropertiesValues(props);
    }
  
    protected __checkIfPublicPropertiesAreGenerated(): void {
      if (this.__publicProperties === undefined) {
        throw new Error('No public properties were initialized. Please call __init(props) in the constructor of the child class of BaseModel');
      }
    }
    /**
     * This class assumes public property without any preceding underscore
     * @param key
     * @protected
     */
    protected __hasPublicProperty(key: string): boolean {
      this.__checkIfPublicPropertiesAreGenerated();
      return this.__publicProperties.indexOf(key) > -1
    }

    toJsonObject(): { [key: string]: any } {
        this.__checkIfPublicPropertiesAreGenerated();
        const ret:any = {};
        for (let i = 0; i < this.__publicProperties.length; i++) {
          const prop: string = this.__publicProperties[i];
          //@ts-ignore
          ret[prop] = this[prop];
        }
        return ret;
    }
  
    public toJson(): string {
      return JSON.stringify(this.toJsonObject());
    }
  
    public create(obj: {[key: string]: any}): BaseModel {
      this.__checkIfPublicPropertiesAreGenerated();
      const model = Object.create(this);
      model.__setPublicPropertiesValues(obj);
      return model;
    }
  
    public createFromCollection(
      objs: Array<{[key: string]: any}>
      |ArrayLike<{[key: string]: any}>
      | Collection<{[key:string] : any}>): BaseModel[] | Collection<BaseModel> {
  
      let models: BaseModel[] | Collection<BaseModel>;
      if (objs instanceof Collection) {
        models = new Collection();
        for (let i = 0;  i < objs.length; i++) {
          models.push(this.create(objs.getItem(i)));
        }
      } else {
        models = [];
        for (let i = 0;  i < objs.length; i++) {
          models.push(this.create(objs[i]));
        }
      }
      return models;
  
    }
  
  }