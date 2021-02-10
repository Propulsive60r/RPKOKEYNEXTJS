import {MainLayout} from "../../components/MainLayout";
import Head from "next/head";

export default function Index() {
    return (
        <MainLayout title={'ПОЛИГРАФИЧЕСКИЕ УСЛУГИ'}>

            <Head>
                <meta name="keyword" content="ПЕЧАТЬ"/>
                <meta name="description" content="ПОЛИГРАФИЧЕСКИЕ УСЛУГИ"/>
            </Head>
        <h1>ПОЛИГРАФИЧЕСКИЕ УСЛУГИ</h1>
        </MainLayout>
    )
}