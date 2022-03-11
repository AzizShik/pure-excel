import {Excel} from './component/excel/Excel';
import {Header} from './component/header/Header';
import {Formula} from './component/formula/Formula';
import {Toolbar} from './component/toolbar/Toolbar';
import {Table} from './component/table/Table';
import './sass/index.scss';

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table],
});

excel.render();
