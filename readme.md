# CSS3 Color Picker

> A UI component for picking color swatches

## Usage

```js
const colorPicker = new CSS3ColorPicker({
  el: '#colorPicker', // css selector OR HTMLElement
  autoRender: true, // render when we instantiate
  swatchSize: 1, // number
  swatchGap: 0, // number
  sizingUnit: 'em', // css unit size
})
```

## Running Locally

Run a local server using `python -m SimpleHTTPServer`

```sh
npm run serve
```