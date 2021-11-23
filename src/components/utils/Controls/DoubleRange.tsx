import React, {useState} from "react";
import {Slider} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {getCardsTC} from "../../../bll/packs-reducer";

type DoubleRangePropsType = {
    minimumCards: number
    maximumCards: number
}


const DoubleRange = (props: DoubleRangePropsType) => {
    const [value, setValue] = useState<number[]>([props.minimumCards, props.maximumCards]);
    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
        dispatch(getCardsTC({min:value[0], max:value[1]}))
    };

    const dispatch = useDispatch()

    return (
        <Slider
            value={value}
            onChangeCommitted={handleChange}
            defaultValue={[props.minimumCards, props.maximumCards]}
            valueLabelDisplay="on"
            aria-labelledby="range-slider"
            min={props.minimumCards}
            max={props.maximumCards}
        />
    )

}

export default DoubleRange
