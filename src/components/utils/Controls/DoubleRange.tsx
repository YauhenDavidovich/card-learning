import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCardsTC} from "../../../bll/packs-reducer";
import {AppStateType} from "../../../bll/store";
import {Slider} from "@mui/material";

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
        setValue([min, max])
    }, [max, min])

    return (
        <div>
            <div>
                <h4>Number of cards</h4>
            </div>
            <Slider
                value={value}
                onChangeCommitted={handleChange}
                min={min}
                max={max}
                valueLabelDisplay="on"
            />
        </div>

    )

}

export default DoubleRange
