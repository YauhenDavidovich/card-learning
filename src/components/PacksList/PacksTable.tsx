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
import {Pack} from "../../dal/packsListApi";
import {deletePackTC, getPacksTC, updatePackTC} from "../../bll/packs-reducer";
import {IconButton} from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {Navigate, useNavigate} from "react-router-dom";

type PacksPropsType = {
    packs: Array<Pack>
}

const PacksTable = (props: PacksPropsType) => {

    const userID = useSelector<AppStateType, string>(state => state.login.user._id)
    const [name, setName] = useState(true)
    const [cardsCount, setCardsCount] = useState(true)
    const [created, setCreated] = useState(true)
    const [updated, setUpdated] = useState(true)
    const dispatch = useDispatch()
    const nav = useNavigate()

    const sort = (value: boolean, sortName: string, dispatch: any) => {
        if (value) {
            dispatch(getPacksTC({sortPacks: `${1}${sortName}`}))
        } else {
            dispatch(getPacksTC({sortPacks: `${0}${sortName}`}))
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
        //return <Navigate to={"/cards-list/"+cardsId}/>
        nav("/learn-page/"+cardsId)
    }

    const deletePackHandler = (packId: string) => {
        return props.packs.map(pack => {
            if(pack.user_id === userID) {
                dispatch(deletePackTC(packId))
            }
        })
    }
    const updatePackHandler = (_id:string, name:string) => {
                dispatch(updatePackTC(_id,name))
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
        weekday?: "long" | "short" | "narrow";
        year?: "numeric" | "2-digit";
        month?: "numeric" | "2-digit" |"long" | "short" | "narrow";
        day?: "numeric" | "2-digit";
        hour?: "numeric" | "2-digit";
        minute?: "numeric" | "2-digit";
    }

    const dateOptions:DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long',day:"numeric", hour: "numeric", minute: "numeric" };

    return (
        <TableContainer component={Paper} style={{maxHeight: 500, minHeight: 500, minWidth: 1000, marginTop: 20}}>
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
                            <TableCell align="left">{new Date(row.created).toLocaleDateString("en-US",dateOptions)}</TableCell>
                            <TableCell align="left">{new Date(row.updated).toLocaleDateString("en-US",dateOptions)}</TableCell>
                            <TableCell align="left">
                                <IconButton style={row.user_id !== userID
                                    ?
                                    {
                                        color: "red",
                                        opacity: 0.3
                                    }
                                    :
                                    {color: "red"}}
                                            disabled={row.user_id !== userID}
                                            onClick={() => deletePackHandler(row._id)}><DeleteIcon/>
                                </IconButton>
                                <IconButton style={styleActionsButton} disabled={row.user_id !== userID}
                                            onClick={() => updatePackHandler(row._id, "super new Pack_name")}>
                                    <EditIcon/>
                                </IconButton>
                                <IconButton
                                    style={styleActionsButton}
                                    onClick={() => getCardsHandler(row._id)}>
                                    <SchoolIcon/>
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
