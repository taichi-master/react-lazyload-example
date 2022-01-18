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
FYI, the "about" page is a lazy load commponent, but the content would still be shown with the curl command.

### Three branchs availalbe.  They are @loadable/components, react.lazy and react-loadable.

### using react-loadable
```bash
checkout react-loadable
```
You might got a warning in the console,
Warning: componentWillMount has been renamed, and is not recommended for use.

## More info

[react-loadable](https://github.com/jamiebuilds/react-loadable)