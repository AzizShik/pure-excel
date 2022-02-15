import './module';
import './sass/index.scss';


console.log('Webpack Start!!!');

async function start() {
  return await Promise.resolve('async working');
}

start().then(console.log);