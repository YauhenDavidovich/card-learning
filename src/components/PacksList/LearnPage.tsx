import {useEffect, useState} from "react";
import {Card} from "../../dal/cardsListApi";
import {Learn} from "./Learn";


const grades = ["не знал", "знал, но забыл", "сомневался", "перепутал", "знал"]



const RandomCount = (min: number, max: number) => {
    return Math.floor(max / (Math.random() * max + min))
}

type CardsPropsType = {
    cards: Array<Card>
    packId: string

}


export const LearnPage = (props: CardsPropsType) => {

    const [newArray, setNewArray] = useState<Array<Card>>([...props.cards])

    let question;
    const newData = newArray.filter(c => {

        return Math.round(c.grade) === RandomCount(1, 5)
    })

    if (!newData.length) {
        setNewArray([...props.cards])
    } else {
        question = newData[Math.floor(Math.random() * newData.length)]

    }
    useEffect(() => {
        setNewArray([...props.cards])
    }, [props.cards])
    return <div>
        {/*{question && question ? <div>{question.question}</div> : null}*/}
        {question && <Learn card={question} grades={grades} packId={props.packId}/>}
    </div>
}
