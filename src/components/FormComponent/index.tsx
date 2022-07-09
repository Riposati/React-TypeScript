import React, { useState } from 'react';
import ButtonComponent from '../ButtonComponent';
import style from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid'; 
import { ITask } from '../../types/tasks';

interface Props{
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

function FormComponent({setTasks}: Props){

    const [task, setTask] = useState("");
    const [time, setTime] = useState("00:00")

    function adicionarTarefa(event: React.FormEvent){
        event.preventDefault();
        setTasks(
            oldTask => [
                ...oldTask, 
                {
                    task,
                    time,
                    selected: false,
                    completed: false,
                    id: uuidv4()
                }
            ])
    
        setTime("00:00");
    }
    
    return (
        <form className={style.novaTarefa} onSubmit = {adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor='task'>Adicione um novo estudo </label>
                <input 
                type='text' 
                name='task'
                onChange = {evento => setTask(evento.target.value)} 
                id='task' 
                placeholder='O que você deseja estudar ?'
                required/>
            </div>

            <div className={style.inputContainer}>
                <label htmlFor='time'>Tempo</label>
                <input 
                type='time' 
                step='1' 
                name='time'
                value={time}
                onChange = {evento => setTime(evento.target.value)}
                id='time' 
                min='00:00:00' 
                max='01:30:00' 
                required/>
            </div>

            <ButtonComponent type={"submit"}>
                Adicionar
            </ButtonComponent>

        </form>
    )
}

// class FormComponent extends React.Component<{setTasks: React.Dispatch<React.SetStateAction<ITask[]>>}>{

//     state = {
//         task: "",
//         time: "00:00"
//     }

//     adicionarTarefa(event: React.FormEvent){
//         event.preventDefault();
//         this.props.setTasks(
//             oldTask => [
//                 ...oldTask, 
//                 {
//                     ...this.state,
//                     selected: false,
//                     completed: false,
//                     id: uuidv4()
//                 }
//             ])

//         this.setState({
//             time: "00:00"
//         })
//     }

//     render(){
//         return (
//             <form className={style.novaTarefa} onSubmit = {this.adicionarTarefa.bind(this)}>
//                 <div className={style.inputContainer}>
//                     <label htmlFor='task'>Adicione um novo estudo </label>
//                     <input 
//                     type='text' 
//                     name='task'
//                     onChange = {(evento => this.setState({...this.state, task: evento.target.value}))} 
//                     id='task' 
//                     placeholder='O que você deseja estudar ?'
//                     required/>
//                 </div>

//                 <div className={style.inputContainer}>
//                     <label htmlFor='time'>Tempo</label>
//                     <input 
//                     type='time' 
//                     step='1' 
//                     name='time'
//                     value={this.state.time}
//                     onChange = {(evento => this.setState({...this.state, time: evento.target.value}))}
//                     id='time' 
//                     min='00:00:00' 
//                     max='01:30:00' 
//                     required/>
//                 </div>

//                 <ButtonComponent type={"submit"}>
//                     Adicionar
//                 </ButtonComponent>

//             </form>
//         )
//     }
// }

export default FormComponent;