import s from './Menu.module.scss'

export default function Menu() {
    return (
        <>
            <div className={s.menu}>
                <a href="#">Начало</a>
                <a href="#">Наши уcлуги</a>
                <a href="#">Акции</a>
                <a href="#">Наши работы</a>
                <a href="#">Наши клиенты</a>
                <a href="#">Партнерам</a>
                <a href="#">Контакты</a>
            </div>
        </>
    )
}

