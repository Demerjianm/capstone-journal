import React from 'react';
import { connect } from 'react-redux';
import { addEntry } from '../actions/journalentry';
import { Form, Image } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import DropZone from './DropZone';

class JournalEntryForm extends React.Component {
  defaults = { url: '', fileUploading: false, title: '', body: '' };
  state = { ...this.defaults };

  setUrl = (url) => {
    this.setState({ url, fileUploading: false });
  }

  setFileUploading = () => {
    this.setState({ fileUploading: true });
  }

  setValue = (e) => {
    let { target: { id, value } } = e;
    this.setState({ [id]: value });
  }

  render () {
    let { title, body, fileUploading, url } = this.state
    return (
      <div>
        <h5 className="center">Add A Journal Entry</h5>
        <Form loading={fileUploading}
          onSubmit={ e => {
            e.preventDefault();
            this.props.dispatch(addEntry(title, body, url));
            this.setState({ ...this.defaults });
            this.props.history.push('/');
          }}
        >
          <Form.Field
            id='title'
            value={title}
            onChange={this.setValue}
            control='input'
            placeholder='Title'
          />
          <Form.Field
            id='body'
            value={body}
            onChange={this.setValue}
            control='textarea'
            placeholder='Entry Body'
          />
          <DropZone setUrl={this.setUrl} setFileUploading={this.setFileUploading} />
          <Image src={url} size='small' />
          <Form.Button className="btn">Save</Form.Button>
        </Form>
      </div>
    )
  }
}

// when you connect a component, you get dispatch as a prop
// mapStateToProps - grabs state out of redux and passes it as props
export default withRouter(connect()(JournalEntryForm));
