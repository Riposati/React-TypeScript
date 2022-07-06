import React from 'react';
import { ITarefa } from '../../types/tarefas';
import ButtonComponent from '../ButtonComponent';
import style from './Form.module.scss';

class FormComponent extends React.Component<{setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>}>{

    state = {
        tarefa: "--",
        tempo: "00:00"
    }

    adicionarTarefa(evento: React.FormEvent){
        evento.preventDefault();
        this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, {...this.state}])
    }

    render(){
        return (
            <form className={style.novaTarefa} onSubmit = {this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor='task'>Adicione um novo estudo </label>
                    <input 
                    type='text' 
                    name='task'
                    onChange = {(evento => this.setState({...this.state, tarefa: evento.target.value}))} 
                    id='task' 
                    placeholder='O que você deseja estudar ?'
                    required/>
                </div>

                <div className={style.inputContainer}>
                    <label htmlFor='time'>Tempo </label>
                    <input 
                    type='time' 
                    step='1' 
                    name='time'
                    value={this.state.tempo}
                    onChange = {(evento => this.setState({...this.state, tempo: evento.target.value}))}
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
}

export default FormComponent;