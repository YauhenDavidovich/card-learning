import {useEffect, useState} from "react";
import {Card} from "../../dal/cardsListApi";
import {Learn} from "./Learn";


const grades = ["не знал", "знал, но забыл", "сомневался", "перепутал", "знал"]


const randomCount = (min: number, max: number) => {
    return Math.floor(max / (Math.random() * max + min))
}

const getRandomCard = (arr: Array<Card>) => {
    let newArr = []
    while (newArr.length < 1) {
        for(let i = 0; i<arr.length; i+=1){
            if (arr[i].grade === randomCount(1, 6)) {
                newArr.push(arr[i])
            }
        }
    }
    return newArr
}

type CardsPropsType = {
    cards: Array<Card>
    packId: string
    maxGrade: number
    minGrade: number
}


export const LearnPage = (props: CardsPropsType) => {

    const [newArray, setNewArray] = useState<Array<Card>>([...props.cards])
    const newData = getRandomCard(newArray)
    const question = newData[Math.floor(Math.random() * newData.length)]

    useEffect(() => {
        setNewArray([...props.cards])
    }, [props.cards])

    return <div>
        {question && <Learn card={question} grades={grades} packId={props.packId}/>}
    </div>
}
