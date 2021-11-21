import React from "react";
import {CardsPack} from "../../dal/packsListApi";

type PacksPropsType = {
    packs: Array<CardsPack>
}


const PacksTable = (props: PacksPropsType) => {

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            {
                props.packs.map(c => <div key={c._id} style={{display: "flex", flexDirection: "row"}}>
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
