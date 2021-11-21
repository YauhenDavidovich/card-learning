import React, {useEffect, useState} from "react";
import {Slider} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getCardsTC} from "../../../bll/packs-reducer";
import {AppStateType} from "../../../bll/store";


const DoubleRange = () => {
    const minimumCards = useSelector<AppStateType, number>(state => state.packs.minCardsCount)
    const maximumCards = useSelector<AppStateType, number>(state => state.packs.maxCardsCount)
    const [value, setValue] = useState<number[]>([minimumCards, maximumCards]);

    const handleChange = (event: any, newValue: number | number[]) => {

        setValue(newValue as number[]);
        debugger
        dispatch(getCardsTC({min:value[0], max:value[1]}))
    };

    const dispatch = useDispatch()

    return (
        <Slider
            value={value}
            onChangeCommitted={handleChange}
            valueLabelDisplay="on"
            defaultValue={[minimumCards,maximumCards]}
            aria-labelledby="range-slider"
            min={minimumCards}
            max={maximumCards}
        />
    )

}

export default DoubleRange
