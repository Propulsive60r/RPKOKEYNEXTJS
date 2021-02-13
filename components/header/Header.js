import s from './Header.module.scss'

export default function Header() {
return (
<>
    <div className={s.header}>
        <div className={s.headerInner}>
            <a href="/"><img src={'images/logoOkey.png'} alt="Логотип РПК ОКЕЙ" /></a>
        </div>
        <div className={s.headerInner}>
            <div className={s.headerInnerUp}>
                <div>
                    <i className="fa fa-mobile fa-lg" aria-hidden="true"/>
                </div>
                <div className={s.headerInnerText}>Контактный телефон<br/>
                    <a className={s.urlText} href="tel:88112661000">8 (8112) 66-1000</a>
                </div>
            </div>

        </div>
        <div className={s.headerInner}>
            <div className={s.headerInnerUp}>
                <div>
                    <i className="fa fa-clock-o fa-lg" aria-hidden="true"/>
                </div>
                <div className={s.headerInnerText}>Принимаем заявки<br/>
                    <span className={s.urlText}>Пнд-Птн: 09.00 -18.00</span>
                </div>
            </div>

        </div>
        <div className={s.headerInner}>
            <div className={s.headerInnerUp}>
                <div>
                    <i className="fa fa-envelope-o fa-lg" aria-hidden="true"/>
                </div>
                <div className={s.headerInnerText}>Наш E-Mail<br/>
                    <a className={s.urlText} href="mailto:info@artpskov.ru">info@artpskov.ru</a>
                </div>
            </div>
        </div>

        <div className={s.headerInner}>
            <div className={s.headerInnerSmm}>
                <a className={s.headerInnerItem} href="#"><i className="fa fa-vk fa-sm fa-fw" aria-hidden="true"/></a>
                <a className={s.headerInnerItem} href="#"><i className="fa fa-instagram fa-sm fa-fw"
                                                           aria-hidden="true"/></a>
                <a className={s.headerInnerItem} href="#"><i className="fa fa-facebook fa-sm fa-fw"
                                                           aria-hidden="true"/></a>
                <a className={s.headerInnerItem} href="#"><i className="fa fa-youtube fa-sm fa-fw" aria-hidden="true"/></a>
            </div>
        </div>
    </div>

</>
)
}