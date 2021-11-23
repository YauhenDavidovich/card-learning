import * as React from "react";
import {useState} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {useDispatch, useSelector} from "react-redux";
import Button from "@mui/material/Button";
import {AppStateType} from "../../bll/store";
import {CardsPack, packsListAPI} from "../../dal/packsListApi";
import {getCardsTC} from "../../bll/packs-reducer";


type PacksPropsType = {
    packs: Array<CardsPack>
}


const PacksTable = (props: PacksPropsType) => {

    const userID = useSelector<AppStateType, string>(state => state.login.user._id)
    const max = useSelector<AppStateType, number>(state => state.packs.maxCardsCount)
    const min = useSelector<AppStateType, number>(state => state.packs.minCardsCount)
    const page = useSelector<AppStateType, number>(state => state.packs.page)
    const pageCount = useSelector<AppStateType, number>(state => state.packs.pageCount)



    const [name, setName] = useState(true)
    const [cardsCount, setCardsCount] = useState(true)
    const [created, setCreated] = useState(true)
    const [updated, setUpdated] = useState(true)
    const dispatch = useDispatch()

    const sort = (value: boolean, sortName: string, dispatch: any) => {
        if (value) {
            dispatch(getCardsTC({sortPacks: `${1}${sortName}`, max, min, page, pageCount}))
        } else {
            dispatch(getCardsTC({sortPacks: `${0}${sortName}`, max, min, page, pageCount}))
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
    const getCardsHandler = (cardsId: string) => {
        alert(cardsId)
    }

    const addPackHandler = () => {
        packsListAPI.addPack({cardsPack: {name: "INGVARR"}}).then(response => alert(response))
    }


    const deletePackHandler = (packId: string) => {
        if (packId === props.packs[0].user_id) {
            alert(packId)
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
        <TableContainer component={Paper} style={{maxHeight: 500, minHeight: 500, minWidth: 1000, marginTop: 20}}>
            <Table aria-label="simple table">
                <TableHead style={{backgroundColor: "#8CE0EB"}}>
                    <TableRow>
                        <TableCell align="left">
                            <Button style={styleHeaderButton} variant="text"
                                    onClick={() => onSortHandler("name")}>Name⮃</Button>
                        </TableCell>
                        <TableCell align="left">
                            <Button style={styleHeaderButton} variant="text"
                                    onClick={() => onSortHandler("cardsCount")}>Cards⮃</Button>
                        </TableCell>
                        <TableCell align="left">
                            <Button style={styleHeaderButton} variant="text"
                                    onClick={() => onSortHandler("created")}>Created⮃</Button>
                        </TableCell>
                        <TableCell align="left">
                            <Button style={styleHeaderButton} variant="text"
                                    onClick={() => onSortHandler("updated")}>Updated⮃</Button>
                        </TableCell>
                        <TableCell align="left">
                            ACTIONS
                        </TableCell>
                        <TableCell align="left">
                            <Button onClick={addPackHandler}>ADD+</Button>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.packs.map((row, index) => (
                        <TableRow
                            key={`${index}${row.name}`}
                            sx={{
                                "&:last-child td, &:last-child th": {border: 0}, "&:nth-of-type(odd)": {
                                    backgroundColor: "#F8F7FD",
                                },
                            }}
                        >
                            <TableCell component="th" scope="row" align="left"
                                       style={{maxWidth: 100, minWidth: 100, wordWrap: "break-word"}}>
                                {row.name}
                            </TableCell>
                            <TableCell align="left">{row.cardsCount}</TableCell>
                            <TableCell align="left">{row.created.substring(0, 10)}</TableCell>
                            <TableCell align="left">{row.updated.substring(0, 10)}</TableCell>
                            <TableCell align="left">
                                <Button style={row.user_id !== userID
                                    ?
                                    {
                                        backgroundColor: "red",
                                        color: "white",
                                        opacity: 0.3
                                    }
                                    :
                                    {backgroundColor: "red", color: "white"}}
                                        disabled={row.user_id !== userID}
                                        onClick={() => deletePackHandler(row.user_id)}>Delete
                                </Button>
                                <Button style={styleActionsButton} disabled={row.user_id !== userID}
                                        onClick={() => deletePackHandler(row.user_id)}>Edit
                                </Button>
                                <Button
                                    style={styleActionsButton}
                                    onClick={() => getCardsHandler(row.user_id)}>Cards
                                </Button>
                            </TableCell>
                            <TableCell align="left">
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


export default PacksTable
