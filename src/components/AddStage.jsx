import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AddStage extends Component {
  state = {
    stageName: '',
  }

  resetFields = () => {
    this.setState({
      stageName: '',
    });
  }

  handleStageNameChange = (e) => {
    this.setState({ stageName: e.target.value });
  }

  onSubmit = () => {
    const { stageName } = this.state;
    this.props.onSubmit({ stageName });
    this.resetFields();
  }

  onCancel = () => {
    this.resetFields();
    this.props.onCancel();
  }

  render() {
    const { stageName } = this.state;
    const { showAddStage } = this.props;

    return (
      <Dialog
        open={showAddStage}
        onClose={this.onCancel}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New Stage</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the name for the new stage.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Stage Name"
            type="text"
            fullWidth
            value={stageName}
            onChange={this.handleStageNameChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.onCancel} color="default">
            Cancel
          </Button>
          <Button onClick={this.onSubmit} color="primary">
            Add Stage
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

AddStage.propTypes = {
  showAddStage: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
};

AddStage.defaultProps = {
  showAddStage: false,
  onCancel: () => {},
  onSubmit: () => {},
};

export default AddStage;
