import * as React from "react";
import {ChangeEvent} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {useDispatch, useSelector} from "react-redux";
import {addCardTC} from "../../bll/cards-reducer";
import {AppStateType} from "../../bll/store";
import {SuperButton} from "./Controls/SuperButton";

export const ModalAddCard = () => {

    const cardsPack_id = useSelector<AppStateType, string>(state => state.cards.cardsParams.cardsPack_id)
    const [open, setOpen] = React.useState(false);
    const [question, setQuestion] = React.useState("");
    const [answer, setAnswer] = React.useState("");
    const dispatch = useDispatch()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleAddCard = () => {

        dispatch(addCardTC({question, answer, cardsPack_id}))
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

            <SuperButton callback={handleClickOpen} title={"Create new card"}/>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Create new card</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Question"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={onQuestionHandler}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Answer"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={onAnswerHandler}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleAddCard}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
