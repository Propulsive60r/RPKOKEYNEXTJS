import s from './Discounts.module.scss'


export default function Discounts() {
    return (
        <>
            <div className={s.container}>
                <h4 className={s.g4Heading}>Наши акции</h4>

                <div className={s.discounts}>
                    <ul className={s.discountsItem}>
                        <div className={s.cards}>
                            <img className={s.cards} src={'images/cards/c1.png'} alt="ПЕЧАТЬ НА БАННЕРЕ"/>
                        </div>
                        <li className={s.s1}>ПЕЧАТЬ НА БАННЕРЕ</li>

                        <li className={s.s2}><strong>170</strong> руб.</li>
                        <li className={s.s3}>за <strong>1 кв. м.</strong></li>
                        <li className={s.s4}>Широкоформатная печать</li>
                        <a href="#">КЛИК на ссылку</a>
                    </ul>


                    <ul className={s.discountsItem}>
                        <div className={s.cards}>
                            <img className={s.cards} src={'images/cards/c6.png'} alt="ПЕЧАТЬ НА БУМАГЕ"/>
                        </div>
                        <li className={s.s1}>ПЕЧАТЬ НА ПОСТЕРЕ</li>

                        <li className={s.s2}><strong>150</strong> руб.</li>
                        <li className={s.s3}>за <strong>А1</strong> формат</li>
                        <li className={s.s4}>Интерьерная печать</li>
                        <a href="#">КЛИК на ссылку</a>
                    </ul>


                    <ul className={s.discountsItem}>
                        <div className={s.cards}>
                            <img className={s.cards} src={'images/cards/c2.png'} alt="ПЕЧАТЬ НА ПОСТЕРЕ"/>
                        </div>
                        <li className={s.s1}>ПЕЧАТЬ НА ПОСТЕРЕ</li>

                        <li className={s.s2}><strong>75</strong> руб.</li>
                        <li className={s.s3}>за <strong>А1</strong> формат</li>
                        <li className={s.s4}>Широкоформатная печать</li>
                        <a href="#">КЛИК на ссылку</a>
                    </ul>


                    <ul className={s.discountsItem}>
                        <div className={s.cards}>
                            <img className={s.cards} src={'images/cards/c3.png'} alt="СВЕТОВЫЕ БУКВЫ"/>
                        </div>
                        <li className={s.s1}>СВЕТОВЫЕ БУКВЫ</li>

                        <li className={s.s2}><strong>95</strong> руб.</li>
                        <li className={s.s3}>за <strong>1 см.</strong> буквы.</li>
                        <li className={s.s4}>Диодная подсветка</li>
                        <a href="#">КЛИК на ссылку</a>
                    </ul>


                    <ul className={s.discountsItem}>
                        <div className={s.cards}>
                            <img className={s.cards} src={'images/cards/c4.png'} alt="СВЕТОВОЙ КОРОБ"/>
                        </div>
                        <li className={s.s1}>СВЕТОВОЙ КОРОБ</li>

                        <li className={s.s2}><strong>9000</strong> руб.</li>
                        <li className={s.s3}>за <strong>1 кв.м.</strong></li>
                        <li className={s.s4}>Диодная подсветка</li>
                        <a href="#">КЛИК на ссылку</a>
                    </ul>


                    <ul className={s.discountsItem}>
                        <div className={s.cards}>
                            <img className={s.cards} src={'images/cards/c5.png'} alt="ВЫВЕСКА НА ПВХ"/>
                        </div>
                        <li className={s.s1}>ВЫВЕСКА НА ПВХ</li>

                        <li className={s.s2}><strong>2250</strong> руб.</li>
                        <li className={s.s3}>за <strong>1 кв. м.</strong></li>
                        <li className={s.s4}>ПВХ 3 мм - основание</li>
                        <a href="#">КЛИК на ссылку</a>
                    </ul>
                </div>
            </div>
        </>
    )
}