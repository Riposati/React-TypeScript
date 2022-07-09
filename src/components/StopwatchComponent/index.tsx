import { useEffect, useState } from "react";
import { convertToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/tasks";
import ButtonComponent from "../ButtonComponent";
import style from './stopwatch.module.scss';
import WatchComponent from "./WatchComponent";

interface Props{
    selected: ITask | undefined;
}

export default function Stopwatch({selected}: Props){

    const [time, setTime] = useState<number>();

    useEffect(() => {
        if(selected?.time)
            setTime(convertToSeconds(selected.time))
    },[selected])

    return (
        <div className={style.cronometro}>

            <p className={style.titulo}>Escolha um card e inicie o cronometro </p>    

            <div className={style.relogioWrapper}>
                <WatchComponent time={time}/>
            </div>
            
            <ButtonComponent>
                Começar!
            </ButtonComponent>
        </div>
    )
}