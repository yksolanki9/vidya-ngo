import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faChild, faGraduationCap, faFemale, faPassport} from '@fortawesome/free-solid-svg-icons';
import App from './components/App';

library.add(faChild, faGraduationCap, faFemale, faPassport, fab);

ReactDOM.render(<App />, document.getElementById('root'));