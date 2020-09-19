#pragma once

#include <napi.h>

class Native : public Napi::ObjectWrap<Native>
{
public:
    Native(const Napi::CallbackInfo&);
    Napi::Value Greet(const Napi::CallbackInfo&);

    static Napi::Function GetClass(Napi::Env);

private:
    std::string _greeterName;
};
