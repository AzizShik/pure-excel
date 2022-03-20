import {ExcelComponent} from '../../core/ExcelComponent';
import {createTable} from './table.template';
import {$} from '../../core/dom';
import {resizeHandler} from './table.resize.js';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      listeners: ['click', 'mousedown', 'mousemove', 'mouseup'],
    });
  }

  toHTML() {
    return createTable(20);
  }

  onClick() {
    console.log('click');
  }

  onMousedown(e) {
    const el = e.target;

    if (el.dataset.resize) {
      resizeHandler(this.$root, e);
    }
  }

  onMousemove() {
    console.log('mousemove');
  }

  onMouseup() {
    console.log('mouseup');
  }
}
