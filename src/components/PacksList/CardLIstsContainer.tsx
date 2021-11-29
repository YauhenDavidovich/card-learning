import React from "react";
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
import {ModalAddCard} from "../utils/ModalAddCard";


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

    const getCards = (searchTerm: string) => dispatch(getCardsTC({cardQuestion: searchTerm, cardsPack_id: packId}))
    const changePageCards = (page: number) => dispatch(getCardsTC({page, cardsPack_id: packId}))
    const setItemsCountOnPage = (pageCount: number) => dispatch(getCardsTC({pageCount, cardsPack_id: packId}))
    const getBackPacksTableHandler = () => {
        nav("/packs-list")
    }
    const addCardHandler = () => {
        return
    }


    return (
        <div className={"main"}>
            <div className="mainBlock">
                <div>
                    <SuperButton callback={getBackPacksTableHandler} title={"← Pack Name"}/>
                    <Search getSearchResult={getCards} searchResult={packsAmount} title={"cards were founded"}/>
                    {/*<Fab color="primary" aria-label="add">*/}
                    {/*    <AddIcon onClick={addCardHandler}/>*/}
                    {/*</Fab>*/}
                    <ModalAddCard/>
                    <CardsTable cards={cards}/>
                    <div>
                        <Paginator changePage={changePageCards} currentPage={currentPage} pageCount={pageCount}
                                   itemTotalCount={packsAmount}/>
                        <ShowItemsPerPage setPageCount={setItemsCountOnPage} pageCount={pageCount}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardListsContainer
