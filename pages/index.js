import Head from "next/head";
import {MainLayout} from "../components/MainLayout";
import ServiceBase from "../components/services/ServiceBase";

export default function Index() {
    return <MainLayout title={'Изготовление наружной рекламы. Полиграфия. Интернет продвижение - РПК ОКЕЙ'}>
        <Head>
            <meta name="keyword" content="РПК ОКЕЙ"/>
            <meta name="description"
                  content="Изготовление наружной рекламы. Полиграфия. Интернет продвижение - РПК ОКЕЙ"/>
        </Head>
        <h1>Hello RPK OKEY from NEXT JS</h1>

    </MainLayout>
}