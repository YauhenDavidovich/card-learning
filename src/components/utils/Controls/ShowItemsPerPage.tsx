import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import FormControl from "@mui/material/FormControl";
import {InputLabel, Select, SelectChangeEvent} from "@mui/material";
import MenuItem from "@material-ui/core/MenuItem";
import styles from "./Select.module.css"


type ShowItemsPerPagePropsType ={
    setPageCount:(items: number)=> void
    pageCount:number
}

const ShowItemsPerPage = (props:ShowItemsPerPagePropsType) => {

    const [page, setCards] = React.useState(props.pageCount)
    const dispatch = useDispatch()


    const handleChange = (event: SelectChangeEvent) => {
        setCards(+event.target.value as number)
        props.setPageCount(+event.target.value)
    }
    useEffect(() => {
        setCards(props.pageCount)
    }, [props.pageCount])

    return (<div className={styles.select}>
        <FormControl sx={{minWidth: 80}}>
            <InputLabel id="pageCount">Cards</InputLabel>
            <Select
                style={{width: 80, height: 30}}
                labelId="pageCount"
                id="pageCount"
                value={page.toString()}
                label="Cards"
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
