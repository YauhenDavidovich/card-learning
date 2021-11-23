import React, {useState} from "react";
import {Slider} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getCardsTC, PacksParamsType} from "../../../bll/packs-reducer";
import {AppStateType} from "../../../bll/store";

type DoubleRangePropsType = {}


const DoubleRange = (props: DoubleRangePropsType) => {
    const {max, min} = useSelector<AppStateType, PacksParamsType>(state => state.packs.packsParams)
    const [value, setValue] = useState<number[]>([min, max]);
    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
        // @ts-ignore
        dispatch(getCardsTC({min: newValue[0], max: newValue[1]}))
    };

    const dispatch = useDispatch()

    return (
        <Slider
            value={value}
            onChangeCommitted={handleChange}
            valueLabelDisplay="on"
            aria-labelledby="range-slider"
            min={min}
            max={max}
        />
    )

}

export default DoubleRange
