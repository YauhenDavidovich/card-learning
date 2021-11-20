import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import {getCardsTC} from "../../bll/packs-reducer";


const PackTable = () => {
    const cards=useSelector<AppStateType>(state=>state.packs.cardsPacks)

const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCardsTC())
    },[])


    return (<div>
            {cards}
        <div>PackTable</div>
        </div>
    )
}

export default PackTable
