import { ITask } from '../../../types/tasks';
import style from '../List.module.scss';

interface Props extends ITask{
    selectTask: (selectedTask: ITask) => void
}

export default function ItemComponent(
    {
        task, 
        time, 
        selected, 
        completed, 
        id,
        selectTask
    
    } : Props){
    
    console.log('item atual: ', {task, time, selected, completed, id});

    return (
        <li 
            className={`${style.item} ${selected ? style.itemSelecionado : ''}`}
            onClick= {() => selectTask({
                task,
                time,
                selected,
                completed,
                id
            })}
        >
            <h3>{task}</h3>
            <p>{time}</p>
        </li>
    )
}