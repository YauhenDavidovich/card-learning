import React, {useEffect} from "react";
import Search from "../utils/Controls/Search";
import PacksToggle from "../utils/Controls/PacksToggle";
import Paginator from "../utils/Controls/Paginator";
import PacksTable from "./PacksTable";
import ShowItemsPerPage from "../utils/Controls/ShowItemsPerPage";
import DoubleRange from "../utils/Controls/DoubleRange";
import {getCardsTC, InitialCardsStateType} from "../../bll/packs-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";



const PacksListsContainer = () => {

    const cards = useSelector<AppStateType, InitialCardsStateType>(state => state.packs)
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getCardsTC({}))
    }, [])

    return (<div className={"main"}>
        <div className="mainBlock">

            <div  style={{display:"flex", flexDirection:"column"}}>

                {cards.cardsPacks.map(c => <div key={c._id} style={{display:"flex", flexDirection:"row"}}>
                    <div>{c.name}</div>
                    <div>{c.cardsCount}</div>
                    <div>{c.updated.substring(0, 10)}</div>
                    <div>{c.created.substring(0, 10)}</div>

                </div>)}
                <div><b>Cards Total Count:{cards.cardPacksTotalCount}</b></div>

            </div>
                <DoubleRange/>
            <Search/>
            <PacksToggle/>
            <PacksTable/>
            <Paginator/>
            <ShowItemsPerPage/>
        </div>
        </div>


)
}

export default PacksListsContainer
