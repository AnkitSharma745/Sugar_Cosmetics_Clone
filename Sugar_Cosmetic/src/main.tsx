import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import ThemeCustomization from './theme';
import store from './redux/rootStore';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <Provider store={store}>
      <ThemeCustomization>
        <App />
      </ThemeCustomization>
    </Provider>
  );
}
