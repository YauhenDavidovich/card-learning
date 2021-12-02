import React from "react"
import Grid from "@mui/material/Grid";
import style from "./Learn.module.css"
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {answerCardTC, getCardsTC} from "../../bll/cards-reducer";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import {AppStateType} from "../../bll/store";
import {RequestStatusType} from "../../bll/app-reducer";

type LearnPropsType = {
    card: {
        answer: string
        question: string
        cardsPack_id: string
        grade: number
        user_id: string
        shots: number
        cardsCount: number
        created: string
        updated: string
        _id: string
    }
    grades: Array<string>
    packId: string

}


export const Learn = (props: LearnPropsType) => {
    const isLoading = useSelector<AppStateType, RequestStatusType>(state => state.app.status)
    const [showAnswer, setShowAnswer] = React.useState(false)
    const [gradeChoose, setGradeChoose] = React.useState<string>("")
    const dispatch = useDispatch();
    const nav = useNavigate();
    const gradesObj = {
        "не знал": 1,
        "знал, но забыл": 2,
        "сомневался": 3,
        "перепутал": 4,
        "знал": 5,
    }


    const {packId} = useParams() as {
        packId: string;
    }

    const gradeHandler = () => {
        // @ts-ignore
        const value = gradesObj[gradeChoose]
        dispatch(answerCardTC({grade: value, card_id: props.card._id}, props.packId))
        setShowAnswer(false)
        setGradeChoose("")
    }



    const resetQuestionHandler = () => {
        dispatch(getCardsTC({cardsPack_id: props.packId}))
        setGradeChoose("")
    }
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGradeChoose((event.target as HTMLInputElement).value)
    }

    const showAnswerHandler = () => {
        setShowAnswer(true)
    }


    return <div className={"main"}>
        <div className={style.learnBlock}>
            <div className={style.container}>
                <Grid container justifyContent={"center"}>
                    <Grid item justifyContent={"center"}>
                        <div className={style.questionBlock}>
                            <div>
                                <h3>{props.card.question}</h3>
                            </div>
                            <div className={!showAnswer ? style.answerBlock : ""}>
                                {props.card.answer}
                            </div>
                            <div>
                                <Button variant={"contained"} onClick={
                                    showAnswerHandler}>Show answer</Button>
                            </div>
                        </div>
                        <div className={style.radioBlock}>
                            <div className={style.gradesBlock}>

                                <FormControl component="fieldset">
                                    <FormLabel component="legend"><h3>Rate yourself:</h3></FormLabel>
                                    <RadioGroup
                                        aria-label="gender"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                        value={gradeChoose}
                                        onChange={onChangeHandler}
                                    >
                                        {props.grades.map((grade, index) => {
                                            return (
                                                <Box key={index}>
                                                    <FormControlLabel value={grade} control={<Radio/>} label={grade}/>
                                                </Box>)
                                        })}
                                    </RadioGroup>
                                </FormControl>
                            </div>
                            <div className={style.buttonBlock}>
                                <Button variant={"contained"} onClick={resetQuestionHandler}>Cancel</Button>
                                <Button onClick={gradeHandler} variant={"contained"}
                                        disabled={gradeChoose === ""}>Next</Button>
                            </div>
                        </div>

                    </Grid>
                </Grid>
            </div>
        </div>
    </div>
}
