import Link from 'next/link';
import Head from "next/head";
import Services from "./services/services";
import Header from "./header/Header";
import Menu from "./menu/Menu";
import Title from "./title/Title";


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
                <Services/>
                {children}

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