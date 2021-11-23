import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store";
import styles from "./Paginator.module.css"
import cn from "classnames";
import {getCardsTC} from "../../../bll/packs-reducer";

const Paginator = () => {
    const pageCount: number = useSelector<AppStateType, number>(state => state.packs.pageCount)
    const cardPacksTotalCount: number = useSelector<AppStateType, number>(state => state.packs.cardPacksTotalCount)
    const currentPage: number = useSelector<AppStateType, number>(state => state.packs.page)


    const max = useSelector<AppStateType, number>(state => state.packs.maxCardsCount)
    const min = useSelector<AppStateType, number>(state => state.packs.minCardsCount)
    const sortPacks = useSelector<AppStateType, string>(state => state.packs.sortPacks)



    let pagesCount = Math.ceil(cardPacksTotalCount / pageCount)
    let pages = []

    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }
    let page = 15;
    let portionCount = Math.ceil(pagesCount / page)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionNumber = (portionNumber - 1) * page + 1
    let rightPortionPageNumber = portionNumber * page

    const dispatch = useDispatch()
    const onPageChanged = (page: number) => {
        dispatch(getCardsTC({page, max, min, sortPacks}))
    }

    return <div className={styles.paginator}>
        {portionNumber > 1 && <button className={styles.arrowLeft} onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}></button>}
        {pages.filter(p => p >= leftPortionNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span className={cn({
                    [styles.selectedPage]: currentPage === p
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
