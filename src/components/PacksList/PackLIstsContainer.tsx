import React from "react";
import Search from "../utils/Controls/Search";
import PacksToggle from "../utils/Controls/PacksToggle";
import PacksTable from "./PacksTable";
import ShowItemsPerPage from "../utils/Controls/ShowItemsPerPage";
import DoubleRange from "../utils/Controls/DoubleRange";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import AddPack from "../utils/Controls/AddPack";
import {getPacksTC} from "../../bll/packs-reducer";
import {Pack} from "../../dal/packsListApi";
import {PaginationPage} from "../utils/Controls/PaginationPage";


const PacksListsContainer = () => {
    const packs = useSelector<AppStateType, Array<Pack>>(state => state.packs.cardPacks)
    const packsAmount = useSelector<AppStateType, number>(state => state.packs.cardPacksTotalCount)
    const currentPage: number = useSelector<AppStateType, number>(state => state.packs.packsParams.page)
    const pageCount: number = useSelector<AppStateType, number>(state => state.packs.packsParams.pageCount)
    const dispatch = useDispatch()
    const getPacks = (searchTerm: string) => dispatch(getPacksTC({packName: searchTerm}))
    const changePagePacks = (page: number) => dispatch(getPacksTC({page}))
    const setItemsCountOnPage = (pageCount: number)=> dispatch(getPacksTC({pageCount}))

    return (
        <div className={"main"}>
            <div className="mainBlock">
                <div className={"left__panel"}>
                    <PacksToggle/>
                    <DoubleRange/>
                    <AddPack/>
                </div>
                <div>
                    <Search getSearchResult={getPacks} searchResult={packsAmount} title={"packs were founded"}/>
                    <PacksTable packs={packs}/>
                    <div className={"bottom__panel"}>
                        <PaginationPage changePage={changePagePacks} currentPage={currentPage} pageCount={pageCount} itemTotalCount={packsAmount}/>
                        <ShowItemsPerPage setPageCount={setItemsCountOnPage} pageCount={pageCount} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PacksListsContainer
