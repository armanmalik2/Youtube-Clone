
import { Provider } from 'react-redux';
import Body from './Body';
import Header from './Header';
import { store } from './app/store';
import Watch from './WatchVideo';
import { createBrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <Watch /> */}
      <Provider store={store}>
          <Header />
          <Body />
      </Provider>
    </div>
  );
}



export default App;
