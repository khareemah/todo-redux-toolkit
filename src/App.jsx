import Form from './components/Form';
import { store } from './store';
import { Provider } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <Provider store={store}>
      <section className='section-center'>
        <ToastContainer autoClose={1000} />
        <Form />
      </section>
    </Provider>
  );
}

export default App;
