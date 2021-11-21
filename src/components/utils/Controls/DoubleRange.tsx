import React, {useState} from "react";
import {Slider} from "@material-ui/core";


const DoubleRange = () => {
    const [value, setValue] = useState([0, 10]);
    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
        console.log(newValue)
    };
    return (
        <Slider
            value={value}
            onChangeCommitted={handleChange}
            valueLabelDisplay="on"
            aria-labelledby="range-slider"
            min={3}
            max={10}
        />
    )

}

export default DoubleRange
