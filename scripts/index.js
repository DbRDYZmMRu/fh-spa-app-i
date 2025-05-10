import * as global from './global.js';
import * as pathRouter from './pathRouter.js';
import * as musicpool from './musicpool.js';
import * as albumMethods from '../components/layout/index.js';
import { store } from '../store/index.js';


export default {
...global, 
...pathRouter,
...musicpool,
...albumMethods,
};




