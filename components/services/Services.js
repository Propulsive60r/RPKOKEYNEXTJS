import Link from "next/link"
import s from './Services.module.scss'
import Fade from 'react-reveal/Fade';

//Массив с объектами

const sBase = [
    {
        title: 'Наружная реклама',
        description: 'Вам нужно сделать вывеску? Вам нужно оформить торговую площадку или офис? Вы желаете, чтобы клиент вас увидел и обратился к вам? Вы пришли по адресу.',
        link: '/outdooradvertising',
        src: 'images/work/advout.jpg',
        alt: 'Наружная реклама'
    },
    {
        title: 'Широкоформатная печать',
        description: 'Печать баннеров, постеров, этикеток, наклеек. Для улицы, помещений. Резка пленки по контуру и в размер. Ламинирование.',
        link: '/largeformatprinting',
        src: 'images/work/printout.jpg',
        alt: 'Широкоформатная печать'
    },
    {
        title: 'Полиграфия',
        description: 'Изготовление любой печатной продукции. Листовки, флаеры, каталоги, буклеты, визитки, афиши, брошюры, журналы, календари.',
        link: '/typography',
        src: 'images/work/printout.jpg',
        alt: 'Полиграфия'
    },
    {
        title: 'Монтажные работы',
        description: 'Профессиональная группа мастеров-монтажников смонтируют для Вас любого уровня сложности наружную рекламу.',
        link: '/montajout',
        src: 'images/work/montajout.jpg',
        alt: 'Монтажные работы'
    },
    {
        title: 'Создание сайтов',
        description: 'Создадим уникальные сайты от простого одностраничного до интернет магазина. С использованием современных технологий. Поддержка и продвижение.',
        link: '/webmade',
        src: 'images/work/desighnWeb.jpg',
        alt: 'Создание сайтов'
    },
    {
        title: 'Интернет-маркетинг',
        description: 'Увеличить охват целевой аудитории? Увеличить конверсию аудитории в лиды? Увеличить конверсию лидов в продажи? Увеличить количество повторных продаж?',
        link: '/webmarketing',
        src: 'images/work/webMark.jpg',
        alt: 'Интернет-маркетинг'
    }
]

//Описание основной компоненты одного ServiceItem. Пропсами описываем внутреннее содержание.

const ServicesItems = (props) => {
    return (
        <>
            <div className={s.servicesItemS}>
                <div className={s.servicesItem}>
                    <Link href={props.link}><a><img className={s.serviceImg}
                                                    src={props.src}
                                                    alt={props.alt}/></a>
                    </Link>
                </div>
                <Link href={props.link}><a className={s.linkNoneColor}><h2>{props.title}</h2></a>
                </Link>
                <Link href={props.link}><a className={s.linkNoneColor}>
                    <h3>{props.description}</h3></a>
                </Link>
            </div>
        </>
    )
}

export default function Services() {

    //Использование метода MAP для уменьшения списка компонентов в JSX
    // 6 -> 1

    let serviceElements = sBase
        .map(service => <ServicesItems title={service.title} description={service.description} link={service.link}
                                       src={service.src} alt={service.alt}/>);


    return (
        <>
            <Fade>
                <div className={s.services}>

                    {serviceElements}

                </div>
            </Fade>
        </>
    )
}

