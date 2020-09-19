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

Napi::Array getMonitorInfo(Napi::Env env) {
    CGError cgret;
    uint32_t num_displays = 0;
    
    std::vector<CGDirectDisplayID> displays(num_displays);
    cgret = CGGetActiveDisplayList(num_displays, displays.begin().base(), &num_displays);
    Napi::Array returnValue = Napi::Array::New(env, num_displays);
    
    for(uint32_t d=0; d<num_displays; d++) {
        returnValue[d] = "{\"deviceId\":\"" + std::to_string(displays[d]) + "\",\"width\":\"" + std::to_string(CGDisplayPixelsWide(displays[d])) + "\",\"height\":\"" + std::to_string(CGDisplayPixelsHigh(displays[d])) + "\"}";
    }
    return returnValue;
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
    exports.Set(Napi::String::New(env, "getMonitorInfo"),
                getMonitorInfo(env));
    return exports;
}

