import React, {Component} from 'react';

import Button from '@material-ui/core/Button';

import classes from './Contact.css';
import TextArea from '../../component/UI/TextArea/TextArea';


class Contact extends Component {
     state = {
        controls : {
            name: {
                elementType: 'full-single',
                value: '',
                label: 'Name',
                validation: {
                },
                valid: true,
                touched: true
            },
            email: {
                elementType: 'half-single',
                label: 'Email',
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            subject: {
                elementType: 'full-single',
                label: 'Subject',
                value: '',
                validation: {
                },
                valid: true,
                touched: true
            }, 
            message: {
                elementType: 'multi',
                label: 'Message',
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: true
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.controls
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({controls: updatedOrderForm, formIsValid: formIsValid});
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    sendMailToMe = () => {

    }    

    
    render(){
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }
        let form = (
            <form onSubmit={this.sendMailToMe}>
                {formElementsArray.map(formElement => (
                    <TextArea 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        label={formElement.config.label}
                        valid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                         />
                        
                ))}
                <Button
                    variant="contained"
                    color="primary"
                    disabled={!this.state.formIsValid}>
                    Send
                </Button>
            </form>
        );
        const h1 = '<h2>';
        const h1close = '</h2>';
        return(
            <div className={classes.Contact}>
                <p className={classes.Decor}>{h1}</p>
                <div className={classes.BodyDecor}>
                  Contact me
                </div>
                <p className={classes.Decor}>{h1close}</p>
                
                <p className={classes.FooterDecor}>I am interested in full-stack development 
                opportunities.
                If you have other request or question, don’t hesitate to contact me using below form.</p>
               
               <div style={{marginLeft:'24px'}}>
                   {form}
               </div>
            </div>
        )
    }
}

export default Contact