## This is a reproducable bug when using Bun's build command together with Chart.js
  
- Spin up a basic http server with `python3 -m http.server 3000`
- Build the javascript with: `bun build --outdir=dst index.js --watch --debug` (Or leave out the watch to build a single time).

Open the developer tools (console) in the browser. When loading `localhost:300/` it should show something like :

`Uncaught RangeError: Maximum call stack size exceeded`

``` shell
index.js:2120 Uncaught RangeError: Maximum call stack size exceeded
    at getComputedStyle (index.js:2120:45)
    at getComputedStyle (index.js:2120:71)
    at getComputedStyle (index.js:2120:71)
    at getComputedStyle (index.js:2120:71)
    at getComputedStyle (index.js:2120:71)
    at getComputedStyle (index.js:2120:71)
    at getComputedStyle (index.js:2120:71)
    at getComputedStyle (index.js:2120:71)
    at getComputedStyle (index.js:2120:71)
    at getComputedStyle (index.js:2120:71)
```

<img width="523" alt="image" src="https://github.com/user-attachments/assets/5140b985-e987-4c5d-860a-e59867881cb0">
