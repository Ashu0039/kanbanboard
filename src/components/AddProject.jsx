import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AddProject extends Component {
  state = {
    projectName: '',
    description: '',
  }

  resetFields = () => {
    this.setState({
      projectName: '',
      description: '',
    });
  }

  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  }

  handleProjectNameChange = (e) => {
    this.setState({ projectName: e.target.value });
  }

  onSubmit = () => {
    const { projectName, description } = this.state;
    this.props.onSubmit({ projectName, description });
  }

  onCancel = () => {
    this.resetFields();
    this.props.onCancel();
  }

  render() {
    const { projectName, description } = this.state;
    const { showAddProject } = this.props;

    return (
      <Dialog
        open={showAddProject}
        onClose={this.onCancel}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New Project</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the name and description for the new project.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Project Name"
            type="text"
            fullWidth
            value={projectName}
            onChange={this.handleProjectNameChange}
          />
          <TextField
            margin="dense"
            id="name"
            label="Description"
            type="text"
            fullWidth
            value={description}
            onChange={this.handleDescriptionChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.onCancel} color="default">
            Cancel
          </Button>
          <Button onClick={this.onSubmit} color="primary">
            Add Project
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

AddProject.propTypes = {
  showAddProject: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
};

AddProject.defaultProps = {
  showAddProject: false,
  onCancel: () => {},
  onSubmit: () => {},
};

export default AddProject;
