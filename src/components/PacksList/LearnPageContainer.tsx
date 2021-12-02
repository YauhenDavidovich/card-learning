import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import {Card} from "../../dal/cardsListApi";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {getCardsTC} from "../../bll/cards-reducer";
import {LearnPage} from "./LearnPage";
import Preloader from "../utils/Preloader";


export const LearnPageContainer = () => {
    const cards = useSelector<AppStateType, Array<Card>>(state => state.cards.cards)
    const totalCardsAmount = useSelector<AppStateType, number>(state => state.cards.cardPacksTotalCount)
    const maxGrade = useSelector<AppStateType, number>(state => state.cards.maxGrade)
    const minGrade = useSelector<AppStateType, number>(state => state.cards.minGrade)

    const {packId} = useParams() as {
        packId: string;
    }

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getCardsTC({cardsPack_id: packId, pageCount:totalCardsAmount}))
    }, [])

    if(!cards[0]._id) {
        return <Preloader/>
    }


    return <div><LearnPage cards={cards} packId={packId} maxGrade={maxGrade} minGrade={minGrade}/></div>
}
