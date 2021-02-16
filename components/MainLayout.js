import Link from 'next/link';
import Head from "next/head";
import Services from "./services/Services";
import Header from "./header/Header";
import Menu from "./menu/Menu";
import Title from "./title/Title";
import Discounts from "./shares/Discounts";


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
                <Title/>
            </nav>
            <main className="container">

                {children}
<Discounts/>
            </main>
            <footer className="container">
                <p>
                    Подвал
                    <p><Link href={'/'}><a>В начало</a></Link></p>
                </p>
            </footer>

        </>
    )
}