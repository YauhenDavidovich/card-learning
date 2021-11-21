import React, {useEffect} from "react";
import Search from "../utils/Controls/Search";
import PacksToggle from "../utils/Controls/PacksToggle";
import Paginator from "../utils/Controls/Paginator";
import PacksTable from "./PacksTable";
import ShowItemsPerPage from "../utils/Controls/ShowItemsPerPage";
import DoubleRange from "../utils/Controls/DoubleRange";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import {getCardsTC} from "../../bll/packs-reducer";
import {CardsPack} from "../../dal/packsListApi";
//fff


const PacksListsContainer = () => {
    const packs = useSelector<AppStateType, Array<CardsPack>>(state => state.packs.cardPacks)
    const minimumCards = useSelector<AppStateType, number>(state => state.packs.minCardsCount)
    const maximumCards = useSelector<AppStateType, number>(state => state.packs.maxCardsCount)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCardsTC({pageCount:10}))
    }, [minimumCards, maximumCards])

    return (
    <div className={"main"}>
        <div className="mainBlock">
            <DoubleRange minimumCards={minimumCards} maximumCards={maximumCards}/>
            <Search/>
            <PacksToggle/>
            <PacksTable packs={packs}/>
            <Paginator/>
            <ShowItemsPerPage/>
        </div>
        </div>

)
}

export default PacksListsContainer
