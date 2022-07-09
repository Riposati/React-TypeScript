import { useEffect, useState } from "react";
import { convertToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/tasks";
import ButtonComponent from "../ButtonComponent";
import style from './stopwatch.module.scss';
import WatchComponent from "./WatchComponent";

interface Props{
    selected: ITask | undefined;
    endTask: () => void
}

export default function Stopwatch({selected, endTask}: Props){

    const [time, setTime] = useState<number>();

    useEffect(() => {
        if(selected?.time)
            setTime(convertToSeconds(selected.time))
    },[selected])

    function regressive(counter: number = 0){
        setTimeout(() => {
            if(counter > 0){
                setTime(counter - 1);
                return regressive(counter - 1);
            }
            endTask();
        }, 1000);
    }

    return (
        <div className={style.cronometro}>

            <p className={style.titulo}>Escolha um card e inicie o cronometro </p>    

            <div className={style.relogioWrapper}>
                <WatchComponent time={time}/>
            </div>
            
            <ButtonComponent onClick = {() => {
                regressive(time);
            }}>
            Começar!
            </ButtonComponent>
        </div>
    )
}