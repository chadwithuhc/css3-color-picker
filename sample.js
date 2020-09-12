const colorPicker = new CSS3ColorPicker({
  el: '#colorPicker', // css selector or element
  swatchSize: 2,
  swatchGap: 0.1,
  buttonText: 'Choose CSS3 Color',
  onChange(colorSwatch) {
    console.log('Changed color:', colorSwatch)
  }
})