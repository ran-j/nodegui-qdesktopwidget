# QDesktopWidget

This is  a wrap of QDesktopWidget for [Nodegui](https://github.com/nodegui/nodegui)

Start with `demo.ts` to understand how it all works.

## Install

```sh
    npm install @ran-j/qdesktopwidget
```

# Usage

```js
    import { QDesktopWidget } from "./index";

    const desktop = new QDesktopWidget();

    const availableGeometry = desktop.availableGeometry()
    const screenGeometry = desktop.screenGeometry()

    console.log(availableGeometry.width() + "x"+ availableGeometry.height())
    console.log(screenGeometry.width() + "x"+ screenGeometry.height())
    console.log(desktop.screenNumber())
```


