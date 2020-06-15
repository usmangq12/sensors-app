import React from 'react'
import { Grid, Typography } from "@material-ui/core";
import ContactlessIcon from '@material-ui/icons/Contactless';

export const Intro = () => {
    return (
        <Grid item sm={6} xs={12} style={{ display: "flex", justifyContent: "center", alignItems: "center",backgroundColor: "#e3a624" }}>
            <Grid style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Grid style={{display: "flex", alignItems: "center"}}>
                    <Typography style={{ fontSize: "60px", fontFamily: "fantasy", color: "white" }}>Sensors</Typography>
                    <ContactlessIcon style={{color: "white"}} fontSize={"large"} />
                </Grid>
                <Typography style={{ fontSize: "15px", fontStyle: "oblique", color: "white" }}>Sensors for your life</Typography>
            </Grid>
        </Grid>
    )
}

export default Intro;