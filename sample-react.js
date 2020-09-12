/* global CSS3ColorPicker */
import React, { useRef, useEffect, useState } from 'react'

export default function ColorPicker({ color }) {
  const [colorSwatch, setColorSwatch] = useState(color)
  const ref = useRef()
  useEffect(() => {
    const colorPicker = new CSS3ColorPicker({
      el: ref.current, // css selector or element
      swatchSize: 2,
      swatchGap: 0.1,
      defaultColor: colorSwatch,
      onChange(colorSwatch) {
        console.log('Changed color:', colorSwatch)
        setColorSwatch(colorSwatch)
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