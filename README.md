# React Lazy Loading Example
### To test out the lazy loading (no server side rending)
```bash
npm run dev
```
and then open a browser.  From the browser open the development tool.  You should see the "about" component is not being loaded util you click on the about link.

### To test out server side rendering (SSR)
```bash
npm start
curl http://localhost:3000/about
```
FYI, Although the "about" page is a lazy loadable commponent, the content would still be shown with the curl command.

### Three branchs are availalbe.  They are @loadable/components, react.lazy and react-loadable.

### using @loadable/components
```bash
git checkout @loadable/components
```

### using react.lazy
```bash
git checkout react.lazy
```
No SSR for react.lazy.

### using react-loadable
```bash
git checkout react-loadable
```
You might got a warning in the console,

Warning: componentWillMount has been renamed, and is not recommended for use.

## More info

[@loadable/component](https://loadable-components.com)

[react.lazy](https://reactjs.org/docs/code-splitting.html)

[react-loadable](https://github.com/jamiebuilds/react-loadable)