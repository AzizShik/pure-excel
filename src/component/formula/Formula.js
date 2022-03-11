import {ExcelComponent} from '../../core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className = 'excel__formula';

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
    });
  }

  toHTML() {
    return `
            <div class="excel__formula-info">fx</div>
        <div class="excel__formula-input" contenteditable="true"></div>
    `;
  }

  onInput(e) {
    console.log('Formula: onInput', e.target.textContent.trim());
  }

  onClick() {

  }
}
