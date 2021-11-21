import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import {getCardsTC, InitialCardsStateType} from "../../bll/packs-reducer";
import {useFormik} from "formik";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import {useNavigate} from "react-router-dom";


const PacksTable = () => {
    const cards = useSelector<AppStateType, InitialCardsStateType>(state => state.packs)
    const history = useNavigate()
    const dispatch = useDispatch()
    //
    // const data2 = {
    //     packName: '',
    //     min:1,
    //     max:2,
    //     sortPacks:'',
    //     page:5,
    //     pageCount:4,
    //     user_id:'',
    //  }


    useEffect(() => {

        dispatch(getCardsTC({}))
    }, [])


    return (
        <div  style={{display:"flex", flexDirection:"column"}}>

            {cards.cardsPacks.map(c => <div key={c._id} style={{display:"flex", flexDirection:"row"}}>
                <div>{c.name}</div>
                <div>{c.cardsCount}</div>
                <div>{c.updated.substring(0, 10)}</div>
                <div>{c.created.substring(0, 10)}</div>

            </div>)}
            <div><b>Cards Total Count:{cards.cardPacksTotalCount}</b></div>

        </div>
    )
}

export default PacksTable
