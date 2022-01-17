import {defaultStyles} from '../../constants';
import {toInlineStyles} from '../../core/utils';

const CODES = {
  A: 65,
  Z: 90,
};

const DEFAULT_WIDTH = 120;
const DEFAULT_HEIGHT = 24;

function getWidth(state, index) {
  return (state[index] || DEFAULT_WIDTH) + 'px';
}

<<<<<<< HEAD
function getHeight(state, index) {
  return (state[index] || DEFAULT_HEIGHT) + 'px';
}

function toCell(state, row) {
  return function(_, col) {
    const id = `${row}:${col}`;
    const width = getWidth(state.colState, col);
    const data = state.dataState[id];
    // const styles = toInlineStyles(state.stylesState[id]);
    const styles = toInlineStyles({
      ...defaultStyles,
      ...state.stylesState[id]
    });
=======
const DEFAULT_WIDTH = 120
const DEFAULT_HEIGHT = 24

function getWidth(state, index) {
  return (state[index] || DEFAULT_WIDTH) + 'px'
}

function getHeight(state, index) {
  return (state[index] || DEFAULT_HEIGHT) + 'px'
}


function toCell(state, row) {
  return function(_, col) {
    const id = `${row}:${col}`
    const width = getWidth(state.colState, col)
    const data = state.dataState[id]
>>>>>>> caa965356bf83f94b51e977f9308c7a1a6597de7
    return `
      <div 
      class="cell" 
      contenteditable 
      data-type="cell" 
      data-col="${col}" 
      data-id="${id}"
<<<<<<< HEAD
      style="${styles}; width: ${width}">
=======
      style="width: ${width}">
>>>>>>> caa965356bf83f94b51e977f9308c7a1a6597de7
      ${data || ''}
      </div>
    `;
  };
}

function toColumn({col, index, width}) {
  return `
    <div 
      class="column" 
      data-type="resizable" 
      data-col="${index}" 
      style="width: ${width}"
    >
      ${col}
      <div class="col-resize" data-resize="col"></div>
    </div>
  `;
}

function createRow(index, content, state) {
<<<<<<< HEAD
  const resize = index
    ? '<div class="row-resize" data-resize="row"></div>'
    : '';
  const height = getHeight(state, index);
=======
  const resize = index ? '<div class="row-resize" data-resize="row"></div>' : ''
  const height = getHeight(state, index)
>>>>>>> caa965356bf83f94b51e977f9308c7a1a6597de7
  return `
    <div
      class="row"
      data-type="resizable"
      data-row="${index}"
      style="height: ${height}"
    >
      <div class="row-info">
        ${index ? index : ''}
        ${resize}
      </div>
      <div class="row-data">${content}</div>
    </div>
  `;
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}

function withWidthForm(state) {
  return function(col, index) {
    return {
      col,
      index,
      width: getWidth(state.colState, index),
    };
  };
}

<<<<<<< HEAD
export function createTable(rowsCount = 15, state = {}) {
  // console.log(state);
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];
=======
function withWidthForm(state) {
  return function(col, index) {
    return {
      col, index, width: getWidth(state.colState, index)
    }
  }
}

export function createTable(rowsCount = 15, state = {}) {
  // console.log(state);
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []
>>>>>>> caa965356bf83f94b51e977f9308c7a1a6597de7

  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(withWidthForm(state))
      .map(toColumn)
      .join('');

  // console.log(cols);

<<<<<<< HEAD
  rows.push(createRow(null, cols, {}));
=======
  rows.push(createRow(null, cols, {}))
>>>>>>> caa965356bf83f94b51e977f9308c7a1a6597de7

  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell(state, row))
<<<<<<< HEAD
        .join('');

    rows.push(createRow(row + 1, cells, state.rowState));
=======
        .join('')

    rows.push(createRow(row + 1, cells, state.rowState))
>>>>>>> caa965356bf83f94b51e977f9308c7a1a6597de7
  }

  return rows.join('');
}
