import {ExcelComponent} from '@core/ExcelComponent';
import {$} from '@core/dom';
import {changeTitle} from '../../redux/actions';
import {defaultTitle} from '@/constants';
import {debounce} from '../../core/utils';
import {ActiveRoute} from '../../core/routes/ActiveRoute';

export class Header extends ExcelComponent {
  static className = 'excel-header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input', 'click'],
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
      <button class="excel-header__button" data-button="remove">
        <span class="material-icons">delete</span>
      </button>
      <button class="excel-header__button" data-button="exit">
        <span class="material-icons">exit_to_app</span>
      </button>
    </div>
    `
  }

  onInput(event) {
    const $target = $(event.target)
    this.$dispatch(changeTitle($target.text()))
  }

  onClick(event) {
    const $target = $(event.target)

    if ($target.data.button === 'remove') {
      const decision = confirm('Вы действительно хотите удалить эту таблицу?')

      if (decision) {
        localStorage.removeItem('excel:' + ActiveRoute.param)
        ActiveRoute.navigate('')
      }
    } else if ($target.data.button === 'exit') {
      ActiveRoute.navigate('')
    }
  }
}
