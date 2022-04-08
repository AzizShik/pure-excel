import {ExcelComponent} from '../../core/ExcelComponent';
import {$} from '../../core/dom';

export class Formula extends ExcelComponent {
  static className = 'excel__formula';

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'keydown'],
      ...options,
    });
  }

  toHTML() {
    return `
        <div class="excel__formula-info">fx</div>
        <div id="formula" class="excel__formula-input" 
        contenteditable="true"></div>
    `;
  }

  init() {
    super.init();
    this.$formula = this.$root.find('#formula');
    this.$on('table:select', ($cell) => {
      this.$formula.text($cell.text());
    });
    this.$on('table:input', ($cell) => {
      this.$formula.text($cell.text());
    });
  }

  onInput(e) {
    this.$emit('formula:input', $(e.target).text());
  }

  onKeydown(e) {
    const keys = ['Enter', 'Table'];
    if (keys.includes(e.key)) {
      e.preventDefault();
      this.$emit('formula:done');
    }
  }
}
