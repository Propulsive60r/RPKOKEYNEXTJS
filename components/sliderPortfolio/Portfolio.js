import s from './Portfolio.module.scss';
import Fade from 'react-reveal/Fade';

//alt добавь к изображениям

const images = [
    "images/imagesPorfolio/1_1x.jpg",
    "images/imagesPorfolio/2_1x.jpg",
    "images/imagesPorfolio/3_1x.jpg",
    "images/imagesPorfolio/4_1x.jpg",
    "images/imagesPorfolio/5_1x.jpg",
    "images/imagesPorfolio/6_1x.jpg",
    "images/imagesPorfolio/7_1x.jpg",
    "images/imagesPorfolio/8_1x.jpg",
    "images/imagesPorfolio/9_1x.jpg",
    "images/imagesPorfolio/10_1x.jpg",
    "images/imagesPorfolio/11_1x.jpg",
    "images/imagesPorfolio/12_1x.jpg"
]

const ImgInner = (props) => {
    return <img className={s.imgInner} src={props.nameFile} alt=""/>
}


export default function Portfolio() {
    return (
        <>

            <h4 className={s.g4Heading}>Наши работы</h4>
            <div className={s.wrapper}>
                <ImgInner nameFile = {images[0]}/>
                <ImgInner nameFile = {images[1]}/>
                <ImgInner nameFile = {images[2]}/>
                <ImgInner nameFile = {images[3]}/>
                <ImgInner nameFile = {images[4]}/>
                <ImgInner nameFile = {images[5]}/>
                <ImgInner nameFile = {images[6]}/>
                <ImgInner nameFile = {images[7]}/>
                <ImgInner nameFile = {images[8]}/>
                <ImgInner nameFile = {images[9]}/>
                <ImgInner nameFile = {images[10]}/>
                <ImgInner nameFile = {images[11]}/>
            </div>

        </>
    )
}