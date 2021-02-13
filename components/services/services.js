import Link from "next/link"

export default function Services() {
    return <>
        <p>
            <Link href={'outdooradvertising'}><a>НАРУЖНАЯ РЕКЛАМА</a></Link>
        </p>
        <p>
            <Link href={'largeformatprinting'}><a>ШИРОКОФОРМАТНАЯ ПЕЧАТЬ</a></Link>
        </p>
        <p>
            <Link href={'typography'}><a>ПОЛИГРАФИЯ</a></Link>
        </p>
    </>
}

