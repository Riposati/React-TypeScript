import Stopwatch from '../components/StopwatchComponent';
import FormComponent from '../components/FormComponent';
import List from '../components/ListComponent';
import style from './App.module.scss';
import { useState } from 'react';
import { ITask } from '../types/tarefas';

function App() {

  const [tasks, setTasks] = useState<ITask[]>([]);

  return (
    <div className={style.AppStyle}>
      <FormComponent setTasks={setTasks} />
      <List tarefas={tasks}/>
      <Stopwatch/>
    </div>
  );
}

export default App;
