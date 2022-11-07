# Task 02

Estimation: 15 min

- in `music.js` write a function that will check user preferences about theme, you can use for it code:

```js
  window.matchMedia('(prefers-color-scheme: dark)');
```

  - it will return an object with information about media query 
-  modify background color in `player-wrapper` div to be: 
  - #ececec when user prefers light theme or has no preferences, 
  - #333 when user prefers dark theme,
- when user click on player display an alert in browser with chosen theme preference
