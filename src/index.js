import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fab);


ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
