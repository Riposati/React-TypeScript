import Stopwatch from '../components/StopwatchComponent';
import FormComponent from '../components/FormComponent';
import List from '../components/ListComponent';
import style from './App.module.scss';
import { useState } from 'react';
import { ITarefa } from '../types/tarefas';

function App() {

  const [tarefas, setTarefas] = useState<ITarefa[]>([]);

  return (
    <div className={style.AppStyle}>
      <FormComponent setTarefas={setTarefas} />
      <List tarefas={tarefas}/>
      <Stopwatch/>
    </div>
  );
}

export default App;
