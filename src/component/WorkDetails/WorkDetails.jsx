import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import porflio from '../../assets/portfolio.svg';
import mediaItem from '../../assets/media_item.svg';

import mediaItem2 from '../../assets/media_item2.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    marginLeft: '24px'
  },
  expansion: {
    backgroundColor: 'white'
  },
  expansionDetails: {
      backgroundColor: '#d8c8db'
  },
  expansionDiv: {
    display: 'flex',
    flexDirection: 'row'
  },
  leftData : {
    width: '60%',
    '@media (max-width: 435px)' : {
      width: '80%',
    },
    '@media (max-width: 380px)' : {
      width: '60%',
    }
  },
  anchor: {
    fontSize: '15px',
    color: 'skyblue',
    wordWrap: 'break-word'
  },
  rightData : {
    width: '40%',
    marginLeft: '3vw',
    '@media (max-width:  435px)' : {
        display:'none'
      }       
  },
  image: {
    width: '90%',
    height: '25vh',
    '@media (max-width:  960px)' : {
        width: '90%',
        height: '18vh'
      }
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const WorkDetails = props => {
  const classes = useStyles();
  const imagArr = [mediaItem, mediaItem2, porflio]

  let expansion = props.details.map((data,index) => {
        return(
            // <div>
                 <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={data.projectId}
                    id={data.projectId}
                    className={classes.expansion}
                    >
                    <Typography className={classes.heading}><b>{data.heading}</b></Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <div className={classes.expansionDiv}>
                            <div className={classes.leftData}>
                                <p><b>Description: </b>{data.Description}</p>
                                {data.gitUrl? <p><b>git Url: </b><a className={classes.anchor} href={data.gitUrl}>{data.gitUrl}</a></p> : null}
                                {data.appUrl? <p><b>App Url: </b><a className={classes.anchor} href={data.appUrl}>{data.appUrl}</a></p> : null}
                            </div>
                            <div className={classes.rightData}>
                                <img className={classes.image} src={imagArr[index]}></img>
                            </div>
                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            // </div>
        )
    })
  return (
   
    <div className={classes.root}>
        {expansion}
    </div>
  );
}

export default WorkDetails;