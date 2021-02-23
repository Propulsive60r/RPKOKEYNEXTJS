import s from './Feedback.module.scss'

export function Feedback() {
    return (
        <>
            <div className={s.wrapper}>
                <div className={s.forma__left}>ОФОРМЛЕНИЕ ЗАЯВКИ</div>
                <div className={s.forma__right}>Обратная связь
                </div>
            </div>
        </>
    )
}