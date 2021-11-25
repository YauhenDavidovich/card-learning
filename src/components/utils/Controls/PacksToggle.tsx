import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCardsTC} from "../../../bll/packs-reducer";
import {AppStateType} from "../../../bll/store";
import {ToggleButton, ToggleButtonGroup} from "@mui/material";


const PacksToggle = () => {
    const [packOwner, setPackOwner] = React.useState('all');
    const dispatch = useDispatch()
    const id = useSelector<AppStateType, string>(state => state.login.user._id)

    const handleChange = (event: React.MouseEvent<HTMLElement>, packOwner: string) => {
        if (packOwner !== null) {

            if (packOwner === "all") {
                dispatch(getCardsTC({user_id: packOwner}))
            }
            if (packOwner === "my") {
                dispatch(getCardsTC({user_id: id}))
            }
            setPackOwner(packOwner);

        }
    };
    return (
        <div>
            <h4>Show packs cards</h4>
            <ToggleButtonGroup
                size="large"
                color="primary"
                value={packOwner}
                exclusive
                onChange={handleChange}
                aria-label="choose packs"
            >
                <ToggleButton value="my">
                    MY
                </ToggleButton>
                <ToggleButton value="all">
                    All
                </ToggleButton>
            </ToggleButtonGroup>
        </div>

    )
}

export default PacksToggle
