import s from './FeedbackForm.module.scss'

import {Head} from "next/document";

export function FeedbackForm() {
    return (
        <>
            <div className={s.forma__right}>
                Обратная связь

                <Head>
                    <script data-b24-form="inline/8/9f634w" data-skip-moving="true" src='Bitrix24.js'/>
                </Head>

            </div>
        </>
    )
}