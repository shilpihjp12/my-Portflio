import React from 'react';

import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        backgroundColor: 'white'
      },
    },
    form: {
        margin: '2vw',
        width: '100%'
    },
    half_field: {
        width: '43.7%',
        '@media (max-width:  1005px)' : {
            width: '90.5%'
          }
    },
    full_field: {
        width: '90.5%',
    },
    button: {
        margin: theme.spacing(1),
        backgroundColor: '#625564',
        color: 'black'
    }
}));

  
const ContactForm = props => {
    const cssClass = useStyles();

    return(
        <div className={cssClass.form}>
            <form className={cssClass.root}> 
                <div>
                    <TextField
                        id="filled-required"
                        label="Name"
                        variant="filled"
                        className={cssClass.half_field}
                        />
                    <TextField
                        required
                        id="filled-required"
                        label="Email"
                        variant="filled"
                        className={cssClass.half_field}
                        />
                </div>
                <div>
                    <TextField
                        id="filled-required"
                        label="Subject"
                        variant="filled"
                        className={cssClass.full_field}
                        />
                </div>
                <div>
                    <TextField
                        required
                        id="filled-multiline-static"
                        label="Message"
                        multiline
                        rows={6}
                        variant="filled"
                        className={cssClass.full_field}
                        />
                </div>
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        className={cssClass.button}>
                        Send
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;