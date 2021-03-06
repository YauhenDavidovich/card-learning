import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store";
import styles from "./Paginator.module.css"
import cn from "classnames";

type PaginatorPropsType ={
    changePage:(page: number) => void
    currentPage: number
    pageCount: number
    itemTotalCount: number
}

const Paginator = (props: PaginatorPropsType) => {
    //const pageCount: number = useSelector<AppStateType, number>(state => state.packs.packsParams.pageCount)
    //const cardPacksTotalCount: number = useSelector<AppStateType, number>(state => state.packs.cardPacksTotalCount)
    //const currentPage: number = useSelector<AppStateType, number>(state => state.packs.packsParams.page)


    let pagesCount = Math.ceil(props.itemTotalCount / props.pageCount)
    let pages = []

    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }
    let page = 10;
    let portionCount = Math.ceil(pagesCount / page)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionNumber = (portionNumber - 1) * page + 1
    let rightPortionPageNumber = portionNumber * page

    const dispatch = useDispatch()
    const onPageChanged = (page: number) => {
        props.changePage(page)

    }

    return <div className={styles.paginator}>
         <button disabled={portionNumber===1} className={styles.arrowLeft} onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}></button>
        {pages.filter(p => p >= leftPortionNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span className={cn({
                    [styles.selectedPage]: props.currentPage === p
                }, styles.pageNumber)}
                             key={p}
                             onClick={(e) => {
                                 onPageChanged(p)
                             }}>{p}</span>
            })}
        {portionCount > portionNumber &&
        <button className={styles.arrowRight} onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}></button>}
    </div>

}

export default Paginator
