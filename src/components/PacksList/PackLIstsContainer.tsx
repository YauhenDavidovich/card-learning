import React from "react";
import Search from "../utils/Controls/Search";
import PacksToggle from "../utils/Controls/PacksToggle";
import Paginator from "../utils/Controls/Paginator";
import PacksTable from "./PacksTable";
import ShowItemsPerPage from "../utils/Controls/ShowItemsPerPage";
import DoubleRange from "../utils/Controls/DoubleRange";


const PacksListsContainer = () => {
    return (
    <div className={"main"}>
        <div className="mainBlock">
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
