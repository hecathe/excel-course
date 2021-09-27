import {ExcelComponent} from '../../core/ExcelComponent';

export class Toolbar extends ExcelComponent {
  static className = 'excel-toolbar'

  constructor($root) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click']
    })
  }

  toHTML() {
    return `
      <button class="excel-toolbar__button">
        <span class="material-icons">format_align_left</span>
      </button>
      <button class="excel-toolbar__button">
        <span class="material-icons">format_align_center</span>
      </button>
      <button class="excel-toolbar__button">
        <span class="material-icons">format_align_right</span>
      </button>
      <button class="excel-toolbar__button">
        <span class="material-icons">format_bold</span>
      </button>
      <button class="excel-toolbar__button">
        <span class="material-icons">format_italic</span>
      </button>
      <button class="excel-toolbar__button">
        <span class="material-icons">format_underline</span>
      </button>
    `
  }

  onClick(event) {
    console.log(event.target);
  }
}