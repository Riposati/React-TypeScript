import React from 'react';
import style from './Button.module.scss';

class ButtonComponent extends React.Component<{children : React.ReactNode,  type?: "button" | "submit" | "reset" | undefined }> {
    
    render(){

        const { type = "button"} = this.props;

        return (
            <button className={style.botao} type={type}>
                {this.props.children}
            </button>
        )
    }
}

export default ButtonComponent;