import s from './Title.module.scss'
import Fade from 'react-reveal/Fade';

export default function Title() {
    return (
        <>
            <div>
                <Fade>
                <h4 className={s.h4Heading}>МЫ СОЗДАЕМ РЕКЛАМУ</h4>
                <h3 className={s.h3Heading}>Рекламная поддержка вашего бизнеса с учетом всех трендов рекламного производства и требований
                    рынка</h3>
                </Fade>
            </div>
        </>
    )
}