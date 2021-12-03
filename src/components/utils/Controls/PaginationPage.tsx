import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

type PaginationPagePropsType = {
    changePage: (page: number) => void
    currentPage: number
    pageCount: number
    itemTotalCount: number
}


export const PaginationPage = (props: PaginationPagePropsType) => {

    let pagesCount = Math.ceil(props.itemTotalCount / props.pageCount)
    return (
        <div>
            <Stack spacing={2}>
                <Pagination page={props.currentPage}
                            onChange={(event: React.ChangeEvent<unknown>, value: number) => {
                                props.changePage(value)
                            }} count={pagesCount}/>
            </Stack>
        </div>
    );
}
