import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className = 'excel-formula'

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'keydown'],
      ...options
    })
  }

  toHTML() {
    return `
      <div class="excel-formula__info">fx</div>
      <div class="excel-formula__input" 
      contenteditable="true" spellcheck="false"></div>
    `
  }

  onInput(event) {
    const text = event.target.textContent.trim()
    this.$emit('formula:input', text)
  }

  onKeydown(event) {
    const keys = [
      'Enter',
    ]

    const {key} = event

    if (keys.includes(key)) {
      event.preventDefault()
      // const id = this.selection.current.id(true)
      // const $next = this.$root.find(nextSelector(key, id))
      // this.selection.select($next)
    }
  }
}
