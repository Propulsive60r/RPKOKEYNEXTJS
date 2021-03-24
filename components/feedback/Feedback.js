import s from './Feedback.module.scss'
import {FeedbackForm} from "./feedback/FeedbackForm";
import {FeedbackApplication} from "./application/FeedbackApplication";

export function Feedback() {
    return (
        <>
            <div className={s.wrapper}>
                <FeedbackApplication/>
                <FeedbackForm/>
            </div>
        </>
    )
}