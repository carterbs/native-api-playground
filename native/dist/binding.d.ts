declare class Native {
    constructor(name: string);
    greet(strName: string): string;
    private _addonInstance;
}
export = Native;
