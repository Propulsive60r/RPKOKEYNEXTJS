import s from './Footer.module.scss'

export default function Footer() {
    return (
        <>
            <div className={s.footer}>

                <div className={s.footerInner}>
                    © 2020 Все права защищены. ООО "РПК ОКЕЙ". ИНН 6027173770.
                </div>

                <div className={s.footerInner}>
                    <div className={s.footerInnerSmm}>
                        <a className={s.footerInnerItem} href="#"><i className="fa fa-vk fa-sm fa-fw"
                                                                     aria-hidden="true"/></a>
                        <a className={s.footerInnerItem} href="#"><i className="fa fa-instagram fa-sm fa-fw"
                                                                     aria-hidden="true"/></a>
                        <a className={s.footerInnerItem} href="#"><i className="fa fa-facebook fa-sm fa-fw"
                                                                     aria-hidden="true"/></a>
                        <a className={s.footerInnerItem} href="#"><i className="fa fa-youtube fa-sm fa-fw"
                                                                     aria-hidden="true"/></a>
                    </div>
                </div>
            </div>

        </>
    )
}