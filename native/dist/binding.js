"use strict";
const path=  require('path')
const addon = require(path.resolve(__dirname, '../build/Release/native-native.node'));
;
class Native {
    constructor(name) {
        this._addonInstance = new addon.Native(name);
    }
    greet(strName) {
        return this._addonInstance.greet(strName);
    }
}
module.exports = Native;
