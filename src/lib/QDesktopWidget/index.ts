import { NativeElement, NodeWidget, QRect, QWidgetSignals } from "@nodegui/nodegui";
import addon from "../utils/addon";

export interface QDesktopWidgetSignals extends QWidgetSignals {}
export class QDesktopWidget extends NodeWidget<QDesktopWidgetSignals> {
  native: NativeElement;
  constructor(parent?: NodeWidget<any>) {
    let native;
    if (parent) {
      native = new addon.QDesktopWidget(parent.native);
    } else {
      native = new addon.QDesktopWidget();
    }
    super(native);
    this.native = native;
    this.nodeParent = parent;
  }
  availableGeometry(screen: number = -1) : QRect {
    return new QRect(this.native.availableGeometry(screen));
  }
  screenGeometry(screen: number = -1) : QRect {
    return new QRect(this.native.screenGeometry(screen));
  }
  screenNumber() : Number {
    return this.native.screenNumber();
  }
}
