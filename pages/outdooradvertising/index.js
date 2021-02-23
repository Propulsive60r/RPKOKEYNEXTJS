import Head from "next/head";
import {MainLayout} from "../../components/MainLayout";
import Outdoor from "../../components/contentServices/outdooradvertising/Outdoor";
import OutdoorServices from "../../components/contentServices/outdooradvertising/OutdoorServices";

export default function Index() {
    return (

        <MainLayout title={'ИЗГОТОВЛЕНИЕ НАРУЖНОЙ РЕКЛАМЫ'}>

            <Head>
                <meta name="keyword" content="НАРУЖКА"/>
                <meta name="description" content="ИЗГОТОВЛЕНИЕ НАРУЖНОЙ РЕКЛАМЫ"/>
            </Head>

            <Outdoor/>
            <OutdoorServices/>

        </MainLayout>
    )
}