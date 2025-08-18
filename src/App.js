
import { Provider } from 'react-redux';
import Body from './Body';
import Header from './Header';
import { store } from './app/store';

function App() {
  return (
    <div>
      <Provider store={store}>
          <Header />
          <Body />
      </Provider>
    </div>
  );
}

export default App;
