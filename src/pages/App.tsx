import Stopwatch from '../components/Cronometro';
import FormComponent from '../components/FormComponent';
import List from '../components/ListComponent';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <FormComponent />
      <List />
      <Stopwatch/>
    </div>
  );
}

export default App;
