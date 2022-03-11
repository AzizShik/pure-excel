import {ExcelComponent} from '../../core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'excel__header';
  
  toHTML() {
    return `
    <input type="text" class="excel__header-input" placeholder="Новая таблица">

    <div class="excel__header-btns">
      <button class="excel__header-btn delete">
        <span class="material-icons">
          delete
        </span>
      </button>
      <button class="excel__header-btn exit">
        <span class="material-icons">
          exit_to_app
        </span>
      </button>
    </div>
    `;
  }
}
