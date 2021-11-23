import React from "react";
import {CardsPack} from "../../dal/packsListApi";
import {useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";

type PacksPropsType = {
    // packs: Array<CardsPack>
}


const PacksTable = (props: PacksPropsType) => {
    const packs = useSelector<AppStateType, Array<CardsPack>>(state => state.packs.cardPacks)

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            {
                // props.packs.map(c => <div key={c._id} style={{display: "flex", flexDirection: "row"}}>
                packs?.map(c => <div key={c._id} style={{display: "flex", flexDirection: "row"}}>
                    <div>{c.name}</div>
                    <div>{c.cardsCount}</div>
                    <div>{c.updated.substring(0, 10)}</div>
                    <div>{c.created.substring(0, 10)}</div>
                </div>)}
            <div><b>Cards Total Count:{}</b></div>

        </div>
    )
}

export default PacksTable
