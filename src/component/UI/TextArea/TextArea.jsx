import React from 'react';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        backgroundColor: 'white'
      },
    },
    full_field: {
        width: '90.5%',
        backgroundColor: 'white',
        marginBottom: '2vh'
    },
    button: {
        margin: theme.spacing(1),
        backgroundColor: '#625564',
        color: 'black'
    }
}));

const TextArea = props => {
    
    const cssClass = useStyles();
    let inputElement = null;

    let valid = false;
    if (props.valid && props.touched) {
        valid = true
    }


    switch ( props.elementType ) {
        case ( 'half-single' ):
            inputElement =  <TextField
            required
            id="filled-required"
            label={props.label}
            variant="filled"
            error ={valid}
            className={cssClass.full_field}
            onChange={props.changed}
            />
            break;
        case ( 'full-single' ):
            inputElement =  <TextField
            id="filled-required"
            label={props.label}
            variant="filled"
            error ={valid}
            className={cssClass.full_field}
            onChange={props.changed}
            />
            break;
        case ( 'multi' ):
            inputElement =  <TextField
            required
            id="filled-multiline-static"
            label={props.label}
            multiline
            rows={6}
            variant="filled"
            error ={valid}
            className={cssClass.full_field}
            onChange={props.changed}
            />
        break;
        default:
            inputElement =  <TextField
            id="filled-required"
            label={props.label}
            variant="filled"
            error ={valid}
            className={cssClass.full_field}
            onChange={props.changed}
            />
    }

    return (
        <div>
            {inputElement}
        </div>
    );

}

export default TextArea;