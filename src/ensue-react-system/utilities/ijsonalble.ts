export interface IJsonable {
    toJson(): string;
    toJsonObject(): {[key: string]: any}
}