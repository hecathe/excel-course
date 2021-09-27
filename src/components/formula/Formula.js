import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className = 'excel-formula'

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click']
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
    console.log(this.$root);
    console.log('Formula: onipnut', event.target.textContent.trim());
  }

  onClick() {}
}
