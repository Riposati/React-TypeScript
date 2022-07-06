import ButtonComponent from "../ButtonComponent";
import style from './stopwatch.module.scss';
import WatchComponent from "./WatchComponent";

export default function Stopwatch(){
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro </p>    

            <div className={style.relogioWrapper}>
                <WatchComponent />
            </div>
            
            <ButtonComponent>
                Começar!
            </ButtonComponent>
        </div>
    )
}