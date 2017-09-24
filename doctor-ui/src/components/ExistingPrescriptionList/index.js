import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, {
  ListItem,
  ListItemIcon,
  ListItemText,
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import InfoIcon from 'material-ui-icons/Info';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    background: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});

class ExistingPrescriptionList extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.root}>
        <Typography type="title">
          Existing Prescriptions
        </Typography>
        <div>
          <List>
            <ListItem button>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText
                primary="Drug 1"
              />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText
                primary="Drug 2"
              />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText
                primary="Drug 3"
              />
            </ListItem>
          </List>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(ExistingPrescriptionList);
