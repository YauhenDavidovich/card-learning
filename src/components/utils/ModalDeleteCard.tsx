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


type ModalDeleteCardPropsType = {
    cardId: string
    cards: Array<Card>
}

export const ModalDeleteCard = (props: ModalDeleteCardPropsType) => {

    //const cardsPack_id = useSelector<AppStateType, string>(state => state.cards.cardsParams.cardsPack_id)
    //const card = props.cards.filter(c => c._id === props.cardId)[0]
    const userId = useSelector<AppStateType,string>(state => state.login.user._id)
    const [open, setOpen] = React.useState(false);
    const [question, setQuestion] = React.useState("");
    const [answer, setAnswer] = React.useState("");
    const dispatch = useDispatch()


    const cardUserId = props.cards.filter(c => c._id === props.cardId)[0]

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleDeleteCard = () => {
        dispatch(deleteCardTC(props.cardId))
        setOpen(false);
    }

    const handleClose = () => {
        setOpen(false);
    };
    const onQuestionHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setQuestion(event.currentTarget.value)
    }
    const onAnswerHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setAnswer(event.currentTarget.value)
    }


    return (
        <div>

            {/*<SuperButton callback={handleClickOpen} title={"Delete"}/>*/}
            <IconButton disabled={userId !== cardUserId.user_id}
                        onClick={handleClickOpen}><DeleteIcon/>
            </IconButton>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Delete card</DialogTitle>
                <DialogContent>
                    Are you sure you want to delete the card?
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleDeleteCard}>Delete</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
