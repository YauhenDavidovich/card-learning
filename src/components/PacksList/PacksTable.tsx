import * as React from "react";
import {useState} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {useDispatch} from "react-redux";
import Button from "@mui/material/Button";
import {Pack} from "../../dal/packsListApi";
import {ActionsType, getPacksTC, GetThunk} from "../../bll/packs-reducer";
import {IconButton, Paper} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import {useNavigate} from "react-router-dom";
import StyleIcon from "@mui/icons-material/Style";
import {ModalUpdatePack} from "../utils/ModalUpdatePack";
import {ModalDeletePack} from "../utils/ModalDeletePack";
import {Dispatch} from "redux";

type PacksPropsType = {
    packs: Array<Pack>
}

const PacksTable = (props: PacksPropsType) => {

    const [sorts, setSorts] = useState(true)
    const dispatch = useDispatch()
    const nav = useNavigate()

    const sort = (value: boolean, sortName: string, dispatch: any) => {
        if (value) {
            dispatch(getPacksTC({sortPacks: `${0}${sortName}`}))
        } else {
            dispatch(getPacksTC({sortPacks: `${1}${sortName}`}))
        }
    }

    const onSortHandler = (sortName: string) => {
        setSorts(!sorts)
        sort(sorts, sortName, dispatch)


    }
    const getCardsHandler = (cardsId: string) => {
        nav("/cards-list/" + cardsId)
    }

    const learnHandler = (cardsId: string) => {
        nav("/learn-page/" + cardsId)
    }

    const styleHeaderButton = {
        color: "black"
    }
    const styleActionsButton = {
        marginLeft: "10px"
    }

    const styleHeader = {
        backgroundColor: "#8CE0EB"
    }

    interface DateTimeFormatOptions {
        weekday?: "long" | "short" | "narrow";
        year?: "numeric" | "2-digit";
        month?: "numeric" | "2-digit" | "long" | "short" | "narrow";
        day?: "numeric" | "2-digit";
        hour?: "numeric" | "2-digit";
        minute?: "numeric" | "2-digit";
    }

    const dateOptions: DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    };

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table" stickyHeader={true}>
                <TableHead>
                    <TableRow style={{}}>
                        <TableCell align="left" style={styleHeader}>
                            <Button style={styleHeaderButton} variant="text"
                                    onClick={() => onSortHandler("name")}>Name⮃</Button>
                        </TableCell>
                        <TableCell align="left" style={styleHeader}>
                            <Button style={styleHeaderButton} variant="text"
                                    onClick={() => onSortHandler("cardsCount")}>Cards⮃</Button>
                        </TableCell>
                        <TableCell align="left" style={styleHeader}>
                            <Button style={styleHeaderButton} variant="text"
                                    onClick={() => onSortHandler("created")}>Created⮃</Button>
                        </TableCell>
                        <TableCell align="left" style={styleHeader}>
                            <Button style={styleHeaderButton} variant="text"
                                    onClick={() => onSortHandler("updated")}>Updated⮃</Button>
                        </TableCell>
                        <TableCell align="left" style={styleHeader}>
                            ACTIONS
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
                                       style={{
                                           maxWidth: 150,
                                           width: 150,
                                           textOverflow: "ellipsis",
                                           overflow: "hidden"
                                       }}>
                                {row.name}
                            </TableCell>
                            <TableCell align="left">{row.cardsCount}</TableCell>
                            <TableCell
                                align="left">{new Date(row.created).toLocaleDateString("en-US", dateOptions)}</TableCell>
                            <TableCell
                                align="left">{new Date(row.updated).toLocaleDateString("en-US", dateOptions)}</TableCell>
                            <TableCell align="left">
                                <ModalDeletePack packId={row._id} packUserID={row.user_id}/>
                                <ModalUpdatePack packId={row._id} packs={props.packs}/>

                                <IconButton
                                    style={styleActionsButton}
                                    onClick={() => learnHandler(row._id)}>
                                    <SchoolIcon/>
                                </IconButton>
                                <IconButton
                                    style={styleActionsButton}
                                    onClick={() => getCardsHandler(row._id)}>
                                    <StyleIcon/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


export default PacksTable
