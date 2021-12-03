import * as React from "react";
import {ChangeEvent} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import {Card} from "../../dal/cardsListApi";
import {updateCardTC} from "../../bll/cards-reducer";
import EditIcon from "@mui/icons-material/Edit";
import {IconButton} from "@mui/material";
import {Pack} from "../../dal/packsListApi";
import {updatePackTC} from "../../bll/packs-reducer";


type ModalUpdatePackPropsType = {
    packId: string
    packs: Array<Pack>
}

export const ModalUpdatePack= (props: ModalUpdatePackPropsType) => {

    const packUserId = props.packs.filter(c => c._id === props.packId)[0]
    const pack= props.packs.filter(pack => pack._id === props.packId)[0]

    const userId = useSelector<AppStateType, string>(state => state.login.user._id)
    const [open, setOpen] = React.useState(false);
    const [packName, setPackName] = React.useState(pack.name);
    const dispatch = useDispatch()



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleUpdatePack = () => {
        dispatch(updatePackTC(  props.packId, packName ))
        setOpen(false);
    }

    const handleClose = () => {
        setOpen(false);
    };
    const onNameHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPackName(event.currentTarget.value)
    }



    return (
        <div>
            <IconButton
                style={userId !== packUserId.user_id
                    ?
                    {
                        color: "blue",
                        opacity: 0.3
                    }
                    :
                    {color: "blue"}}

                disabled={userId !== packUserId.user_id}
                        onClick={handleClickOpen}>
                <EditIcon/>
            </IconButton>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Update card</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Question"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={onNameHandler}
                        value={packName}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleUpdatePack}>Update</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
