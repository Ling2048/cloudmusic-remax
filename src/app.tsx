import * as React from 'react';
import store from './store/redux';
import { Provider } from 'react-redux';
import './app.css';

const App: React.FC = props => <Provider store={store}>
  {props.children}
</Provider> as React.ReactElement;

export default App;
