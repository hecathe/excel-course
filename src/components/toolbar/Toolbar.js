import {defaultStyles} from '../../constants';
import {$} from '../../core/dom';
import {ExcelStateComponent} from '../../core/ExcelStateComponent';
import {createToolbar} from './toolbar.template';

export class Toolbar extends ExcelStateComponent {
  static className = 'excel-toolbar'

  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
      subscribe: ['currentStyles'],
      ...options
    })
  }

  prepare() {
    this.initState(defaultStyles)
  }

  get template() {
    return createToolbar(this.state)
  }

  toHTML() {
    return this.template
  }

  storeChanged(changes) {
<<<<<<< HEAD
    this.setState(changes.currentStyles)
=======
    console.log(changes);
>>>>>>> caa965356bf83f94b51e977f9308c7a1a6597de7
  }

  onClick(event) {
    const $target = $(event.target);
    if ($target.data.type === 'button') {
      const value = JSON.parse($target.data.value);
      this.$emit('toolbar:applyStyle', value)
<<<<<<< HEAD
=======

      const key = Object.keys(value)[0]
      this.setState({[key]: value[key]})
>>>>>>> caa965356bf83f94b51e977f9308c7a1a6597de7
    }
  }
}
