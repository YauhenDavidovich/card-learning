import React from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import {useNavigate, useParams} from "react-router-dom";


const CheckEmail = () => {
    const { email } = useParams() as {
        email: string;
    }
    return (
        <div className={"main"}>
            <Container maxWidth="sm" style={{background: "#F9F9FE", height: "50vh", borderRadius: "8px"}}>
                <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={3}>
                    <Grid item style={{
                        marginTop: "20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: 'center',
                        alignItems: "center"
                    }}>
                        <Box component="span" sx={{marginTop: "20px", marginBottom: "20px"}}>
                            <h2 style={{textAlign: 'center'}}>Check Email</h2>
                        </Box>
                        <Box>
                            <h4>We’ve sent an Email with instructions to {email}</h4>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default CheckEmail
