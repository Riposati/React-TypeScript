import Stopwatch from '../components/StopwatchComponent';
import FormComponent from '../components/FormComponent';
import List from '../components/ListComponent';
import style from './App.module.scss';
import { useState } from 'react';
import { ITask } from '../types/tasks';

function App() {

  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(taskSelected: ITask){
    setSelected(taskSelected);
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      selected: task.id === taskSelected.id ? true : false
    })))
  }

  return (
    <div className={style.AppStyle}>
      <FormComponent setTasks={setTasks} />
      <List 
        tasks={tasks}
        selectTask = {selectTask}
      />
      <Stopwatch selected={selected}/>
    </div>
  );
}

export default App;
