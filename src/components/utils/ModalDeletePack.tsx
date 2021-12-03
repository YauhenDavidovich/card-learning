import * as React from "react";
import {ChangeEvent} from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {useDispatch, useSelector} from "react-redux";
import {deleteCardTC} from "../../bll/cards-reducer";
import {IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {AppStateType} from "../../bll/store";
import {Card} from "../../dal/cardsListApi";
import {deletePackTC} from "../../bll/packs-reducer";


type ModalDeletePackPropsType = {
    packId: string
    packUserID: string
}

export const ModalDeletePack = (props: ModalDeletePackPropsType) => {

    //const cardsPack_id = useSelector<AppStateType, string>(state => state.cards.cardsParams.cardsPack_id)
    //const card = props.cards.filter(c => c._id === props.cardId)[0]
    const userId = useSelector<AppStateType,string>(state => state.login.user._id)
    const [open, setOpen] = React.useState(false);
    const [question, setQuestion] = React.useState("");
    const [answer, setAnswer] = React.useState("");
    const dispatch = useDispatch()




    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleDeletePack = () => {
        dispatch(deletePackTC(props.packId))
        setOpen(false);
    }

    const handleClose = () => {
        setOpen(false);
    };



    return (
        <div>

            <IconButton
                style={userId !== props.packUserID
                    ?
                    {
                        color: "red",
                        opacity: 0.3
                    }
                    :
                    {color: "red"}}
                disabled={userId !== props.packUserID}
                        onClick={handleClickOpen}><DeleteIcon/>
            </IconButton>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Delete Pack</DialogTitle>
                <DialogContent>
                    Are you sure you want to delete the pack?
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleDeletePack}>Delete</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
