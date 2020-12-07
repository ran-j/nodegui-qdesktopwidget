#include <napi.h>
#include "QDesktopWidget/qdesktopwidget_wrap.h"

Napi::Object Main(Napi::Env env, Napi::Object exports) {
    QDesktopWidgetWrap::init(env, exports);
    return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Main)
