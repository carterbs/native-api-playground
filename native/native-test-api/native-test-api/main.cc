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

Napi::String getMonitorInfo() {
    CGError cgret;
    uint32_t num_displays = 0;
    
    cgret = CGGetActiveDisplayList(0, NULL, &num_displays);
    std::vector<CGDirectDisplayID> displays(num_displays);
    cgret = CGGetActiveDisplayList(num_displays, displays.begin().base(), &num_displays);
    std::vector<std::string> returnValue(num_displays);
    
    for(uint32_t d=0; d<num_displays; d++) {
        CGSize size = CGDisplayScreenSize(displays[d]);
        returnValue[d] = "{\"deviceId\":\"" + std::to_string(displays[d]) + "\",\"width\":\"" + std::to_string(size.width) + "\",\"height\":\"" + std::to_string(size.height) + "\"}";
    }
    return returnValue;
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
    exports.Set(Napi::String::New(env, "nativeTest"),
                Napi::Function::New(env, getMonitorInfo));
    return exports;
}

