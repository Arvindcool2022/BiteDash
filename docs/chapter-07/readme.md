```javascript
//BEWARE
function handleClick() {
  setName('Robin');
  console.log(name); // Still "Taylor"!
}
```

- The set function only updates the state variable for the next render. If you read the state variable after calling the set function, you will still get the old value that was on the screen before your call.

[docs](https://react.dev/reference/react/useState#setstate-caveats)
