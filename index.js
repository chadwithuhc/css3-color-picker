(function(global) {

  const css3Colors = [
    { name: 'goldenrod', hex: '#DAA520', rgb: [218,165,32] }
  ]

  const defaultOptions = {
    el: null, // css selector OR HTMLElement
    autoRender: true, // render when we instantiate
  }

  class CSS3ColorPicker {

    constructor(options = {}) {
      this.options = { ...defaultOptions, ...options }
      const { el, autoRender } = this.options
      let $el

      if (!el) {
        throw new Error('CSS3ColorPicker: missing option `el`')
      }

      if (typeof el === 'string') {
        $el = document.querySelector(el)
      }
      else if (el.nodeName) {
        $el = el
      }

      this.$el = $el

      console.log('CSS3ColorPicker instance', this)

      if (autoRender) {
        this.render()
      }
    }

    colorsets = {
      css3: css3Colors
    }

    render() {
      this.$el.innerHTML = `You made the right "pick"`
    }

  }

  global.CSS3ColorPicker = CSS3ColorPicker

})(window)