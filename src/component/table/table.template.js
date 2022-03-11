const CODES = {
  A: 65,
  Z: 90,
};

function toCell() {
  return `
    <div class="excel__table-row-cell" contenteditable="true"></div>
  `;
}

function createCol(col) {
  return `
  <div class="excel__table-row-column">${col}</div>
  `;
}

function createRow(index, content) {
  return `
  <div class="excel__table-row">
    <div class="excel__table-row-info">${index ? index : ''}</div>
    <div class="excel__table-row-data">${content}</div>
  </div>
  `;
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];

  const cols = new Array(colsCount).fill('').map((el, index) => {
    return String.fromCharCode(CODES.A + index);
  }).map((el) => {
    return createCol(el);
  }).join('');

  console.log(cols);

  rows.push(createRow(null, cols));

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount).fill('').map(toCell).join('');
    rows.push(createRow(i + 1, cells));
  }

  return rows.join('');
}
