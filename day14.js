var debounce = function(fn, t) {
  let interval;
  return function(...args) {
    const lastCall = Date.now()
    clearInterval(interval);
    interval = setInterval(() => {
      if (Date.now() - lastCall >= t) {
        fn(...args);
        clearInterval(interval);
      }
    }, 1);
  }
}
