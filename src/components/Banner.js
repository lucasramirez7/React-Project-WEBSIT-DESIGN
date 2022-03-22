import { makeStyles, Paper, Typography } from "@material-ui/core" 
import smart from "../img/fotobanner.jpg"
import logo from "../img/logo.png"
import {ThemeProvider, CreateMuiTheme} from "@material-ui/core"

const Banner = () => {
    const classes = useStyles();
    return (
     <>
        <Paper variant="outlined" square elevation={0} className={classes.banner}>
        
        <div className={classes.titleContainer}>
        
            <Typography variant = "h4" component="h1" className= {classes.title}>
                <span style = {{color: "#800080"}}>LR</span>Computer
            </Typography>
            <img src = {logo} alt="logo" className= {classes.logo}/>
        
        </div>
        
        <div className= {classes.subtitleContainer}> 
        
        <Typography className = {classes.subtitle} variant = "h6">
        Servicio de soporte Técnico en Computación y redes.
        </Typography>
        
        </div>
        </Paper>
    </>
    )
}

export default Banner


const useStyles = makeStyles((theme) => ({
   
    banner:{

     width: "inherit",
     height: "75vh",
     backgroundImage: `url(${smart})`,
     backgroundRepeat: "no-repeat",
     backgroundSize: "cover",
     backgroundPosition: "center center",
     color: "#fff",
     fontWeight: "bold",
     position: "relative",

    },

    titleContainer:{

       background: "#000",
       opacity: 0.8,
       display: "flex",
       justifyContent: "space-between",
       alignItems: "center",
       position: "absolute",
       top: 0,
       left: 0,
       right:0,

    },

    title:{

        padding: theme.spacing(2),
       
    },

    logo: {

        padding: theme.spacing(3) ,
        width: "8rem",
        height: "auto",

    },

    subtitleContainer: {

        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        background: "#000",
        opacity: "0.8",
    },
   

    subtitle:{
        fontSize: "1.5rem",
        color: "#93E0CA",
        fontWeight: "bold",
        padding: theme.spacing(3),
        height: "auto",
        textAlign: "center",
    },


 
}))