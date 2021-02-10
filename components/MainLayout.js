import Link from 'next/link';
import Head from "next/head";
import Services from "./services";


export function MainLayout({children, title = 'РПК ОКЕЙ'}) {
    return (
        <>
            <Head>
                <title>{title} | РПК ОКЕЙ</title>
                <meta charSet="utf-8"/>
            </Head>
            <nav>
                <p>
                    Навигация
                </p>
            </nav>
            <main>
                <Services/>
                {children}

            </main>
            <footer>
                <p>
                    Подвал
                    <p><Link href={'/'}><a>В начало</a></Link></p>
                </p>
            </footer>
            <style jsx global>{`
              nav {
                
              }
              
              main {
            
              }
            `}</style>
        </>
    )
}