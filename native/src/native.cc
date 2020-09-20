#include "native.h"

Napi::Array getMonitorInfo(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    CGError cgret;
    uint32_t num_displays = 0;
    
    cgret = CGGetActiveDisplayList(0, NULL, &num_displays);
    std::vector<CGDirectDisplayID> displays(num_displays);
    cgret = CGGetActiveDisplayList(num_displays, displays.begin().base(), &num_displays);
    Napi::Array returnValue = Napi::Array::New(env, num_displays);
    
    for(uint32_t d=0; d<num_displays; d++) {
        CGDirectDisplayID displayId = displays[d];
        size_t width = CGDisplayPixelsWide(displayId);
        size_t height = CGDisplayPixelsHigh(displayId);
        returnValue[d] = "{\"displayId\":\"" + std::to_string(displayId) + "\",\"width\":\"" + std::to_string(width) + "\",\"height\":\"" + std::to_string(height) + "\"}";
    }
    return returnValue;
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
    exports.Set(Napi::String::New(env, "getMonitorInfo"),
                Napi::Function::New(env, getMonitorInfo));
    return exports;
}


NODE_API_MODULE(addon, Init)
