import {ExcelComponent} from '@core/ExcelComponent';
import {$} from '@core/dom';
import {changeTitle} from '../../redux/actions';
import {defaultTitle} from '@/constants';
import {debounce} from '../../core/utils';

export class Header extends ExcelComponent {
  static className = 'excel-header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input'],
      ...options
    })
  }

  prepare() {
    this.onInput = debounce(this.onInput, 300)
  }

  toHTML() {
    const title = this.store.getState().title || defaultTitle
    return `
    <label>
      <input type="text" class="excel-header__input" value="${title}">
    </label>

    <div class="excel-header__buttons">
      <button class="excel-header__button">
        <span class="material-icons">delete</span>
      </button>
      <button class="excel-header__button">
        <span class="material-icons">exit_to_app</span>
      </button>
    </div>
    `
  }

  onInput(event) {
    const $target = $(event.target)
    this.$dispatch(changeTitle($target.text()))
  }
}
