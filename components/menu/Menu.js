import s from './Menu.module.scss'
import Link from "next/link";

export default function Menu() {
    return (
        <>
            <div className={s.menu}>
                <Link href="/"><a>Начало</a></Link>
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

