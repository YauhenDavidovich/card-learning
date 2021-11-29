import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import * as React from "react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import {getCardsTC} from "../../bll/cards-reducer";
import {Card} from "../../dal/cardsListApi";
import Rating from "@mui/material/Rating";

type CardsPropsType = {
    cards: Array<Card>

}

export const CardsTable = (props: CardsPropsType) => {

    const cardsPack_id = useSelector<AppStateType, string>(state => state.cards.cardsParams.cardsPack_id)


    const [name, setName] = useState(true)
    const [cardsCount, setCardsCount] = useState(true)
    const [created, setCreated] = useState(true)
    const [updated, setUpdated] = useState(true)
    const dispatch = useDispatch()


    const sort = (value: boolean, sortName: string, dispatch: any) => {
        if (value) {
            dispatch(getCardsTC({sortCards: `${1}${sortName}`,cardsPack_id}))
        } else {
            dispatch(getCardsTC({sortCards: `${0}${sortName}`,cardsPack_id}))
        }
    }

    const onSortHandler = (sortName: string) => {
        if (sortName === "name") {
            setName(!name)
            sort(name, sortName, dispatch)
        }
        if (sortName === "cardsCount") {
            setCardsCount(!cardsCount)
            sort(cardsCount, sortName, dispatch)

        }
        if (sortName === "created") {
            setCreated(!created)
            sort(created, sortName, dispatch)
        }
        if (sortName === "updated") {
            setUpdated(!updated)
            sort(updated, sortName, dispatch)
        }

    }


    const styleHeaderButton = {
        color: "black"
    }
    const styleActionsButton = {
        backgroundColor: "#D7D8EF",
        marginLeft: "10px"
    }
    return (
        <div>
            <TableContainer component={Paper} style={{maxHeight: 500, minHeight: 500, minWidth: 1350, maxWidth: 1350, marginTop: 20}}>
                <Table aria-label="simple table">
                    <TableHead style={{backgroundColor: "#8CE0EB"}}>
                        <TableRow>
                            <TableCell align="left">
                                <Button style={styleHeaderButton} variant="text"
                                        onClick={() => onSortHandler("name")}>Question⮃</Button>
                            </TableCell>
                            <TableCell align="left">
                                <Button style={styleHeaderButton} variant="text"
                                        onClick={() => onSortHandler("cardsCount")}>Answer⮃</Button>
                            </TableCell>
                            <TableCell align="left">
                                <Button style={styleHeaderButton} variant="text"
                                        onClick={() => onSortHandler("created")}>Last Updated⮃</Button>
                            </TableCell>
                            <TableCell align="left">
                                <Button style={styleHeaderButton} variant="text"
                                        onClick={() => onSortHandler("updated")}>Grade⮃</Button>
                            </TableCell>
                            <TableCell align="left">
                                ACTIONS
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.cards.map((row, index) => (
                            <TableRow
                                key={`${index}${row.question}`}
                                sx={{
                                    "&:last-child td, &:last-child th": {border: 0}, "&:nth-of-type(odd)": {
                                        backgroundColor: "#F8F7FD",
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row" align="left"
                                           style={{maxWidth: 100, minWidth: 100, wordWrap: "break-word"}}>
                                    {row.question}
                                </TableCell>
                                <TableCell align="left">{row.answer}</TableCell>
                                <TableCell align="left">{row.created.substring(0, 10)}</TableCell>
                                <TableCell align="left">
                                    <Rating
                                        value={row.grade}
                                        readOnly
                                    />
                                </TableCell>
                                <TableCell align="left">

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
