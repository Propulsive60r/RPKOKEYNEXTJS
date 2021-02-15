import Head from "next/head";
import {MainLayout} from "../../components/MainLayout";
import Services from "../../components/services/Services";

export default function Index() {
    return (

        <MainLayout title={'ИЗГОТОВЛЕНИЕ НАРУЖНОЙ РЕКЛАМЫ'}>

            <Head>
                <meta name="keyword" content="НАРУЖКА"/>
                <meta name="description" content="ИЗГОТОВЛЕНИЕ НАРУЖНОЙ РЕКЛАМЫ"/>
            </Head>

            <h1>ИЗГОТОВЛЕНИЕ НАРУЖНОЙ РЕКЛАМЫ</h1>
            <Services/>
        </MainLayout>
    )
}