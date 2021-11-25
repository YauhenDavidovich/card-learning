import React, { useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCardsTC} from "../../../bll/packs-reducer";
import Box from "@material-ui/core/Box";
import FormControl from "@mui/material/FormControl";
import {Input, InputLabel, Select, SelectChangeEvent} from "@mui/material";
import MenuItem from "@material-ui/core/MenuItem";
import {AppStateType} from "../../../bll/store";
import styles from './Select.module.css'


const ShowItemsPerPage = () => {
    const pageCount=useSelector<AppStateType,number>(state=>state.packs.packsParams.pageCount)
    const [page, setCards]=React.useState(pageCount)
    const dispatch = useDispatch()


    const handleChange=(event: SelectChangeEvent)=>{
        setCards(+event.target.value as number)
        dispatch(getCardsTC({pageCount: +event.target.value}))
    }
    useEffect(() => {
        setCards(pageCount)
    }, [pageCount])

    return (<div className={styles.select}>
    <FormControl sx={{ minWidth: 80 }}>
        <InputLabel id="pageCount">Per page</InputLabel>
        <Select
            labelId="pageCount"
            id="pageCount"
            value={page.toString()}
            label="Per Page"
            onChange={handleChange}
        >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
        </Select>
    </FormControl>
    </div>)

}

export default ShowItemsPerPage
