import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import {Card} from "../../dal/cardsListApi";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {getCardsTC} from "../../bll/cards-reducer";
import {LearnPage} from "./LearnPage";


export const LearnPageContainer = () => {
    const cards = useSelector<AppStateType, Array<Card>>(state => state.cards.cards)

    const {packId} = useParams() as {
        packId: string;
    }

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getCardsTC({cardsPack_id: packId}))

    }, [])

    return <div><LearnPage cards={cards}/></div>
}