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


type ModalUpdateCardPropsType = {
    cardId: string
    cards: Array<Card>
}

export const ModalUpdateCard = (props: ModalUpdateCardPropsType) => {


    const cardUserId = props.cards.filter(c => c._id === props.cardId)[0]
    const card= props.cards.filter(c => c._id === props.cardId)[0]

    const userId = useSelector<AppStateType, string>(state => state.login.user._id)
    const [open, setOpen] = React.useState(false);
    const [question, setQuestion] = React.useState(card.question);
    const [answer, setAnswer] = React.useState(card.answer);
    const dispatch = useDispatch()



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleUpdateCard = () => {
        dispatch(updateCardTC({card: {question, answer, _id: props.cardId}}))
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

            {/*<SuperButton callback={handleClickOpen} title={"Update"}/>*/}
            <IconButton disabled={userId !== cardUserId.user_id}
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
                        onChange={onQuestionHandler}
                        value={question}
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
                        value={answer}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleUpdateCard}>Update</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
