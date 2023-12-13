import './styles/general.scss';
import { Header } from './components';
import { TodoContainer } from './containers/TodoContainer/TodoContainer';

function App() {
  return (
    <>
      <Header />
      <div className="mr-auto ml-auto" style={{ width: '500px' }}>
        <TodoContainer />
      </div>
    </>
  );
}

export default App;
