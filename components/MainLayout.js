import Link from 'next/link';
import Head from "next/head";
import Header from "./header/Header";
import Menu from "./menu/Menu";
import Discounts from "./discounts/Discounts";
import Portfolio from "./sliderPortfolio/Portfolio";
import {Feedback} from "./feedback/Feedback";
import Fade from "react-reveal/Fade";
import Footer from "./footer/Footer";
import Partners from "./partners/Partners";



export function MainLayout({children, title = 'РПК ОКЕЙ'}) {
    return (
        <>
            <Head>
                <title>{title} | РПК ОКЕЙ</title>
                <meta charSet="utf-8"/>
            </Head>
            <nav className="container">
                <Header/>
                <Menu/>

            </nav>
            <main className="container">
                {children}

                <Fade bottom>
                    <Discounts/>
                </Fade>

                <Fade>
                    <Portfolio/>
                    <Partners/>
                    <Feedback/>
                </Fade>

            </main>
            <footer className="container">

                <Footer/>

            </footer>

        </>
    )
}