import Head from "next/head";
import {MainLayout} from "../components/MainLayout";
import Services from "../components/services/Services";
import Title from "../components/title/Title";

export default function Index() {
    return <MainLayout title={'Изготовление наружной рекламы. Полиграфия. Интернет продвижение - РПК ОКЕЙ'}>
        <Head>
            <meta name="keyword" content="РПК ОКЕЙ"/>
            <meta name="description"
                  content="Изготовление наружной рекламы. Полиграфия. Интернет продвижение - РПК ОКЕЙ"/>
        </Head>
        <Title/>
        <Services/>
    </MainLayout>

}

