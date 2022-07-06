import ItemComponent from './ItemComponent';
import style from './List.module.scss';

function List(){

    const tarefas: Array<{tarefa: string, tempo: string}> = [
        {
            tarefa: "React",
            tempo: "02:00:00"
        },

        {
            tarefa: "JavaScript",
            tempo: "01:00:00"
        },

        {
            tarefa: "Typescript",
            tempo: "03:00:00"
        }
    ];

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