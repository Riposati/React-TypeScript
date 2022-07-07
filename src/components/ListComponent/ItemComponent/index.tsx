import { ITask } from '../../../types/tasks';
import style from '../List.module.scss';

export default function ItemComponent({task, time, selected, completed, id} : ITask){
    
    console.log('item atual: ', {task, time, selected, completed, id});

    return (
        <li className={style.item}>
            <h3>{task}</h3>
            <p>{time}</p>
        </li>
    )
}