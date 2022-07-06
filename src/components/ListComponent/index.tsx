import { ITarefa } from '../../types/tarefas';
import ItemComponent from './ItemComponent';
import style from './List.module.scss';

function List({tarefas}: {tarefas: ITarefa[]}){

    return (

        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                
                {
                    tarefas.map((item, index) => (
                       <ItemComponent 
                            key = {index}
                            {...item}
                       />
                    ))
                }

            </ul>
        </aside>
    )   
}

export default List;