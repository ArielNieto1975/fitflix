import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'green',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  });

const CampoTexto = (props)=>{
    const manejarCambio = (e)=>{
       props.actualizarValor(e.target.value)
    }

    return <Box >
        <CssTextField 
                label={props.titulo} 
                value = {props.valor}
                onChange={manejarCambio}
                id="custom-css-outlined-input"
                fullWidth
                margin= "normal"
                color='error'
                InputLabelProps={{
                    style:{
                        color:"white",   
                        fontSize:"1.4rem"             
                    }
                }}
                InputProps={{
                  style:{
                      color:"white",    
                      fontSize: "1.5rem"            
                  }
              }}
         />
        
    </Box>
}
export default CampoTexto