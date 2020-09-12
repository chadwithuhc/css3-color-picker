const colorPicker = new CSS3ColorPicker({
  el: '#colorPicker', // css selector or element
  swatchSize: 2,
  swatchGap: 0.1,
  onChange(colorSwatch) {
    console.log('Changed color:', colorSwatch)
  }
})