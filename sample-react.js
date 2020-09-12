function ColorPicker() {
  const ref = useRef()
  useEffect(() => {
    const colorPicker = new CSS3ColorPicker({
      el: ref.current, // css selector or element
      swatchSize: 2,
      swatchGap: 0.1,
      onChange(colorSwatch) {
        console.log('Changed color:', colorSwatch)
      }
    })

    return () => {
      colorPicker.destroy()
    }
  })

  return (
    <div ref={ref}></div>
  )
}