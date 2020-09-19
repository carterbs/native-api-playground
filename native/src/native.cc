// Napi::Function Native::GetClass(Napi::Env env) {
//     return DefineClass(env, "Native", {
//         Native::InstanceMethod("greet", &Native::Greet),
//     });
// }

// Napi::Object Init(Napi::Env env, Napi::Object exports) {
//     Napi::String name = Napi::String::New(env, "Native");
//     exports.Set(name, Native::GetClass(env));
//     return exports;
// }

#include "native.h"

//
//  main.cpp
//  native-test-api
//
//  Created by Bradley Carter on 9/19/20.
//

#include <iostream>
#include <ApplicationServices/ApplicationServices.h>
#include <vector>
#include <napi.h>
using namespace Napi;

Napi::Array getMonitorInfo(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    CGError cgret;
    uint32_t num_displays = 0;
    
    cgret = CGGetActiveDisplayList(0, NULL, &num_displays);
    std::vector<CGDirectDisplayID> displays(num_displays);
    cgret = CGGetActiveDisplayList(num_displays, displays.begin().base(), &num_displays);
    Napi::Array returnValue = Napi::Array::New(env, num_displays);
    
    for(uint32_t d=0; d<num_displays; d++) {
        CGSize size = CGDisplayScreenSize(displays[d]);
        returnValue[d] = "{\"deviceId\":\"" + std::to_string(displays[d]) + "\",\"width\":\"" + std::to_string(size.width) + "\",\"height\":\"" + std::to_string(size.height) + "\"}";
    }
    return returnValue;
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
    exports.Set(Napi::String::New(env, "getMonitorInfo"),
                Napi::Function::New(env, getMonitorInfo));
    return exports;
}


NODE_API_MODULE(addon, Init)
