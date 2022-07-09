import style from './watch.module.scss';

interface Props{
    time : number | undefined
}

export default function Watch({time = 0} : Props){

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minuteDozens, minuteUnit] = String(minutes).padStart(2,'0');
    const [secondDozens, secondUnit] = String(seconds).padStart(2,'0');

    return (
        <>
            <span className={style.relogioNumero}>{minuteDozens}</span>
            <span className={style.relogioNumero}>{minuteUnit}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{secondDozens}</span>
            <span className={style.relogioNumero}>{secondUnit}</span>
        </>
    )
}