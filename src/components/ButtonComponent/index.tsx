import React from 'react';
import style from './Button.module.scss';

interface Props{
    type?: "button" | "submit" | "reset" | undefined, 
    onClick?: () => void,
    children?: React.ReactNode
}

function ButtonComponent({onClick, type, children} : Props){

    return (
        <button className={style.botao}
            onClick = {onClick}  
            type={type}>
            {children}
        </button>
    )
}

// class ButtonComponent extends React.Component<{children : React.ReactNode,  type?: "button" | "submit" | "reset" | undefined, onClick?: () => void }> {
    
//     render(){

//         const { type = "button", onClick} = this.props;

//         return (
//             <button onClick = {onClick} className={style.botao} type={type}>
//                 {this.props.children}
//             </button>
//         )
//     }
// }

export default ButtonComponent;