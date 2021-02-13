import '../styles/main.scss'
import '../styles/nullstyle.scss'

export default function MyApp({Component, pageProps}) {
    return (
        <>
            <Component {...pageProps} />
        </>
    )
}
