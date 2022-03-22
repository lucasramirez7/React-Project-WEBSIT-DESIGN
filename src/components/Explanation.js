import { makeStyles, Typography , Paper} from "@material-ui/core" 


const Explanation = () => {
    const classes = useStyles();
    
    return (
        
        <Paper variant="outlined" square elevation={2} className={classes.explanation}>
        
        <Typography variant= "subtitle2" paragraph gutterBottom>

        Mi nombre es Lucas Ramirez, soy técnico en Computación y redes desde el 2019, soluciono problemas de hardware y software en su computadora.
        Cuento con experiencia en instalación de redes.
        Día a día aprendo algo nuevo de este hermoso rubro en el cual pienso ser profesional en un futuro.
        Actualmente soy estudiante de programación en UTN, donde ya manejo varios lenguajes de programación.
                

        </Typography>
        
        </Paper>

    )
}

export default Explanation

const useStyles = makeStyles((theme) => ({
    
    explanation: {
     
    }
    
}))