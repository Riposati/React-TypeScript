import React from 'react';
import style from './Button.module.scss';

class ButtonComponent extends React.Component<{children : React.ReactNode}> {
    render(){
        return (
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default ButtonComponent;