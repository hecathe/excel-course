<<<<<<< HEAD
import {storage} from '../core/utils';
import {defaultStyles, defaultTitle} from '../constants';

const defaultState = {
  title: defaultTitle,
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
=======
import {defaultStyles} from '../constants';
import {storage} from '../core/utils';

const defaultState = {
  rowState: {},
  colState: {},
  dataState: {},
>>>>>>> caa965356bf83f94b51e977f9308c7a1a6597de7
  currentText: '',
  currentStyles: defaultStyles,
};

<<<<<<< HEAD
const normalize = (state) => ({
  ...state,
  currentStyles: defaultStyles,
  currentText: ''
})

export const initialState = storage('excel-state')
  ? normalize(storage('excel-state'))
=======
export const initialState = storage('excel-state')
  ? storage('excel-state')
>>>>>>> caa965356bf83f94b51e977f9308c7a1a6597de7
  : defaultState;
