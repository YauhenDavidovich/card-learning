import React from "react";
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
import AddPack from "../utils/Controls/AddPack";


const PacksListsContainer = () => {
    const packs = useSelector<AppStateType, Array<CardsPack>>(state => state.packs.cardPacks)
    const packsAmount = useSelector<AppStateType, number>(state => state.packs.cardPacksTotalCount)
    const dispatch = useDispatch()
    const getPacks = (searchTerm: string) => dispatch(getCardsTC({packName: searchTerm}))
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(getCardsTC({}))
    // }, [])

    return (
        <div className={"main"}>
            <div className="mainBlock">
                <div className={"left__panel"}>
                    <PacksToggle/>
                    <DoubleRange/>
                    <AddPack/>
                </div>
                <div>
                    <Search getSearchResult={getPacks} searchResult={packsAmount}/>
                    <PacksTable packs={packs}/>
                    <div className={"bottom__panel"}>
                        <Paginator/>
                        <ShowItemsPerPage/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PacksListsContainer
