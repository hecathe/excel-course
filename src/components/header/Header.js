import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'excel-header'

  toHTML() {
    return `
    <label>
      <input type="text" class="excel-header__input" value="Новая таблица">
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
}
