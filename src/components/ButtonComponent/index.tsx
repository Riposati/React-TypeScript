import React from 'react';
import style from './Button.module.scss';

class ButtonComponent extends React.Component{
    render(){
        return (
            <button className={style.botao}>Botão</button>
        )
    }
}

export default ButtonComponent;