import ButtonComponent from '../ButtonComponent';
import './style.scss';

function FormComponent(){
    return (
        <form className='novaTarefa'>
            <div className='inputContainer'>
                <label htmlFor='task'>Adicione um novo estudo </label>
                <input 
                type='text' 
                name='task' 
                id='task' 
                placeholder='O que você deseja estudar ?'
                required/>
            </div>

            <div className='inputContainer'>
                <label htmlFor='time'>Tempo </label>
                <input 
                type='time' 
                step='1' 
                name='time' 
                id='time' 
                min='00:00:00' 
                max='01:30:00' 
                required/>
            </div>

            <ButtonComponent/>

        </form>
    )
}

export default FormComponent;