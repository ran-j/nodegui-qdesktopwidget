import {
  QMainWindow,
  QPushButton,
  FlexLayout,
  QWidget
} from "@nodegui/nodegui";

import { QDesktopWidget } from "./index";

const win = new QMainWindow();
const rootView = new QWidget();
rootView.setObjectName("root");
rootView.setLayout(new FlexLayout());

const desktop = new QDesktopWidget();

const button = new QPushButton();
button.setText("Go go go");
button.addEventListener("clicked", () => {
  const availableGeometry = desktop.availableGeometry()
  const screenGeometry = desktop.screenGeometry()
  console.log(availableGeometry.width() + "x"+ availableGeometry.height())
  console.log(screenGeometry.width() + "x"+ screenGeometry.height())
  console.log(desktop.screenNumber())
});

if (rootView.layout) {
  rootView.layout.addWidget(button);
}

win.setCentralWidget(rootView);
win.setStyleSheet(`
  #root {
    flex: 1;
    height: '100%';
    align-items: 'center';
    justify-content: 'space-around';
  }
`);
win.setWindowTitle("NodeGUI Demo");
win.resize(400, 700);
win.show();

(global as any).win = win; // To prevent win from being garbage collected.
