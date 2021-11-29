import * as React from "react";
import {ChangeEvent} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import {useDispatch, useSelector} from "react-redux";
import {addCardTC} from "../../bll/cards-reducer";
import {AppStateType} from "../../bll/store";


type ModalUpdateCardPropsType = {
    cardId: string
}

export const ModalUpdateCard = (props: ModalUpdateCardPropsType) => {

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
            <Fab color="primary" aria-label="add">
                <AddIcon onClick={handleClickOpen}/>
            </Fab>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Create card</DialogTitle>
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
