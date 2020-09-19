import addon from '../../native/build/Release/native-native.node'


class Native {
    constructor(name) {
        this._addonInstance = new addon.Native(name)
    }

    greet (strName) {
        return this._addonInstance.greet(strName);
    }
}

module.exports = { 
    Native
}