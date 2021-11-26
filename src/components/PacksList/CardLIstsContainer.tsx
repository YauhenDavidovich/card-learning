import React, {useEffect} from "react";
import Search from "../utils/Controls/Search";
import Paginator from "../utils/Controls/Paginator";
import ShowItemsPerPage from "../utils/Controls/ShowItemsPerPage";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import {CardsTable} from "./CardsTable";
import {Card} from "../../dal/cardsListApi";
import {useNavigate, useParams} from "react-router-dom";
import {getCardsTC} from "../../bll/cards-reducer";
import {SuperButton} from "../utils/Controls/SuperButton";


const CardListsContainer = () => {

    const cards = useSelector<AppStateType, Array<Card>>(state => state.cards.cards)

    const packsAmount = useSelector<AppStateType, number>(state => state.cards.cardPacksTotalCount)

    const currentPage: number = useSelector<AppStateType, number>(state => state.cards.cardsParams.page)

    const pageCount: number = useSelector<AppStateType, number>(state => state.cards.cardsParams.pageCount)
    const dispatch = useDispatch()
    const nav = useNavigate()
    const {packId} = useParams() as {
        packId: string;
    }

    useEffect(() => {
        dispatch(getCardsTC({cardsPack_id: packId}))
    }, [])
    const getCards = (searchTerm: string) => dispatch(getCardsTC({cardQuestion: searchTerm, cardsPack_id: packId}))
    //@ts-ignore
    const changePageCards = (page: number) => dispatch(getCardsTC({page}))
    //@ts-ignore
    const setItemsCountOnPage = (pageCount: number) => dispatch(getCardsTC({pageCount}))
    const getBackPacksTableHandler = () => {
        nav("/packs-list")
    }

    return (
        <div className={"main"}>
            <div className="mainBlock">
                <div>
                    <SuperButton callback={getBackPacksTableHandler} title={"← Pack Name"}/>
                    <Search getSearchResult={getCards} searchResult={packsAmount} title={"cards were founded"}/>
                    <CardsTable cards={cards}/>
                    <div>
                        <Paginator changePage={changePageCards} currentPage={currentPage}/>
                        <ShowItemsPerPage setPageCount={setItemsCountOnPage} pageCount={pageCount}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardListsContainer
