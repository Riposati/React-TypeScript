import style from '../List.module.scss';

export default function ItemComponent({tarefa, tempo} : {tarefa: string, tempo: string}){
    return (
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <p>{tempo}</p>
        </li>
    )
}