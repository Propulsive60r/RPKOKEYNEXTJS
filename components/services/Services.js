import Link from "next/link"
import s from './Services.module.scss'
import Fade from 'react-reveal/Fade';


const sBase = [
    {
        title: 'Наружная реклама',
        description: 'Вам нужно сделать вывеску? Вам нужно оформить торговую площадку или офис? Вы желаете, чтобы клиент вас увидел и обратился к вам? Вы пришли по адресу.'
    },
    {
        title: 'Широкоформатная печать',
        description: 'Печать баннеров, постеров, этикеток, наклеек. Для улицы, помещений. Резка пленки по контуру и в размер. Ламинирование.'
    },
    {
        title: 'Полиграфия',
        description: 'Изготовление любой печатной продукции. Листовки, флаеры, каталоги, буклеты, визитки, афиши, брошюры, журналы, календари.'
    },
    {
        title: 'Монтажные работы',
        description: 'Профессиональная группа мастеров-монтажников смонтируют для Вас любого уровня сложности наружную рекламу.'
    },
    {
        title: 'Создание сайтов',
        description: 'Создадим уникальные сайты от простого одностраничного до интернет магазина. С использованием современных технологий. Поддержка и продвижение.'
    },
    {
        title: 'Интернет-маркетинг',
        description: 'Увеличить охват целевой аудитории? Увеличить конверсию аудитории в лиды? Увеличить конверсию лидов в продажи? Увеличить количество повторных продаж?'
    }
]

export default function Services() {

    return (
        <>
            <Fade>
            <div className={s.services}>
                <div className={s.servicesItemS}>
                    <div className={s.servicesItem}>
                        <Link href={'/outdooradvertising'}><a><img className={s.serviceImg}
                                                                   src={'images/work/advout.jpg'}
                                                                   alt="Наружная реклама"/></a>
                        </Link>
                    </div>
                    <Link href={'/outdooradvertising'}><a className={s.linkNoneColor}><h2>{sBase[0].title}</h2></a>
                    </Link>
                    <Link href={'/outdooradvertising'}><a className={s.linkNoneColor}><h3>{sBase[0].description}</h3></a>
                    </Link>
                </div>
                <div className={s.servicesItemS}>
                    <div className={s.servicesItem}>
                        <img className={s.serviceImg} src={'images/work/printout.jpg'} alt="Широкоформатная печать"/>
                    </div>
                    <h2>{sBase[1].title}</h2>
                    <h3>{sBase[1].description}</h3>
                </div>
                <div className={s.servicesItemS}>
                    <div className={s.servicesItem}>
                        <img className={s.serviceImg} src={'images/work/poliout.jpg'} alt="Полиграфия"/>
                    </div>
                    <h2>{sBase[2].title}</h2>
                    <h3>{sBase[2].description}</h3>
                </div>
                <div className={s.servicesItemS}>
                    <div className={s.servicesItem}>
                        <img className={s.serviceImg} src={'images/work/montajout.jpg'} alt="Монтажные работы"/>
                    </div>
                    <h2>{sBase[3].title}</h2>
                    <h3>{sBase[3].description}</h3>
                </div>
                <div className={s.servicesItemS}>
                    <div className={s.servicesItem}>
                        <img className={s.serviceImg} src={'images/work/desighnWeb.jpg'} alt="Создание сайтов"/>
                    </div>
                    <h2>{sBase[4].title}</h2>
                    <h3>{sBase[4].description}</h3>
                </div>
                <div className={s.servicesItemS}>
                    <div className={s.servicesItem}>
                        <img className={s.serviceImg} src={'images/work/webMark.jpg'} alt="Интернет-маркетинг"/>
                    </div>
                    <h2>{sBase[5].title}</h2>
                    <h3>{sBase[5].description}</h3>
                </div>
            </div>
            </Fade>
        </>
    )
}

