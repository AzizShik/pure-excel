import {ExcelComponent} from '../../core/ExcelComponent';

export class Toolbar extends ExcelComponent {
  static className = 'excel__toolbar';

  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
      ...options
    });
  }

  toHTML() {
    return `
            <button class="excel__toolbar-btn">
          <span class="material-icons">
            format_align_left
          </span>
        </button>
        <button class="excel__toolbar-btn">
          <span class="material-icons">
            format_align_center
          </span>
        </button>
        <button class="excel__toolbar-btn">
          <span class="material-icons">
            format_align_right
          </span>
        </button>
        <button class="excel__toolbar-btn">
          <span class="material-icons">
            format_bold
          </span>
        </button>
        <button class="excel__toolbar-btn">
          <span class="material-icons">
            format_italic
          </span>
        </button>
        <button class="excel__toolbar-btn">
          <span class="material-icons">
            format_underlined
          </span>
        </button>
    `;
  }

  onClick() {
    console.log(event.target);
  }
}
