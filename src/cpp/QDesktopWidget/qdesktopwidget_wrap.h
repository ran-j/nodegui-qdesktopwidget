#pragma once
#include <napi.h>
#include <nodegui/QtWidgets/QWidget/qwidget_macro.h>
#include <QPointer>
#include "nstatusbar.hpp"

class QDesktopWidgetWrap : public Napi::ObjectWrap<QDesktopWidgetWrap> {
 private:
  QPointer<NStatusBar> instance;

 public:
  static Napi::Object init(Napi::Env env, Napi::Object exports);
  QDesktopWidgetWrap(const Napi::CallbackInfo &info);
  ~QDesktopWidgetWrap();
  NStatusBar *getInternalInstance();
  static Napi::FunctionReference constructor;
  // wrapped methods
  Napi::Value availableGeometry(const Napi::CallbackInfo &info);
  Napi::Value screenGeometry(const Napi::CallbackInfo &info);
  Napi::Value screenNumber(const Napi::CallbackInfo &info);

  QWIDGET_WRAPPED_METHODS_DECLARATION
};
