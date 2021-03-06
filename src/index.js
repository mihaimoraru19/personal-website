import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import 'semantic-ui-css/semantic.min.css';

library.add(fab);


ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
