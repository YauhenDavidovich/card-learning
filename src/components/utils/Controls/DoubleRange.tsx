import React, {useEffect, useState} from "react";
import Slider from '@mui/material/Slider';
import {useDispatch, useSelector} from "react-redux";
import {getCardsTC} from "../../../bll/packs-reducer";
import {AppStateType} from "../../../bll/store";

const DoubleRange = () => {
    const dispatch = useDispatch()
    const max = useSelector<AppStateType, number>(state => state.packs.maxCardsCount)
    const min = useSelector<AppStateType, number>(state => state.packs.minCardsCount)
    const [value, setValue] = useState<number[]>([min, max]);
    const handleChange = (event: React.SyntheticEvent | Event, newValue: number | Array<number>) => {
        setValue(newValue as number[]);
        // @ts-ignore
        dispatch(getCardsTC({min: newValue[0], max: newValue[1]}))
    };
    useEffect(() => {
        dispatch(getCardsTC({}))

    }, [max])




    return (
        <Slider
            value={value}
            onChangeCommitted={handleChange}
            min={min}
            max={max}
            valueLabelDisplay="on"
        />
    )

}

export default DoubleRange
