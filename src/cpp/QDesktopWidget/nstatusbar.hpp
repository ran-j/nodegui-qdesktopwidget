#pragma once

#include <nodegui/core/NodeWidget/nodewidget.h>
#include <QDesktopWidget>
#include <QApplication>

class NStatusBar : public QDesktopWidget, public NodeWidget {
 public:
  Q_OBJECT
  NODEWIDGET_IMPLEMENTATIONS(QDesktopWidget)
 public:
  using QDesktopWidget::QDesktopWidget;  // inherit all constructors of QStatusBar
};
