import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateEntry } from '../actions/journalentry';
import { Header, Image, Button, Form, Container } from 'semantic-ui-react';

class JournalEditForm extends Component {
  entry = this.props.entries.find( ent => ent._id === this.props.id);

render() {
    let { title, body, image, _id } = this.entry

  return (
    <Container>
      <Header as='h2' textAlign='center'>Update Journal Entry</Header>
      <Form
        ref={ n => this.form = n }
        onSubmit={ e => {
          console.log(this.title)
          console.log(this.body)
          e.preventDefault();
          this.props.dispatch(updateEntry( _id , this.title.value, this.body.value, image))
          this.props.toggleEdit()
        }}
      >
        <Form.Field width={8}>
          <label>Title</label>
          <input ref={ n => this.title = n } defaultValue={title} />
        </Form.Field>
        <Form.Field width={8}>
          <label>Entry</label>
          <textarea ref={ n => this.body = n } defaultValue={body} />
        </Form.Field>
        <Image src={image} size='medium' />
        <div className='ui buttons'>
          <button className='ui button' onClick={() => this.props.toggleEdit()}>Back</button>
        <div className='or'></div>
          <button className="ui button positive">Save</button>
        </div>
      </Form>
    </Container>
    )
  }
}

// when you connect a component, you get dispatch as a prop
// mapStateToProps - grabs state out of redux and passes it as props

const mapStateToProps = (state) => {
  return { entries: state.journal }
}
export default connect(mapStateToProps)(JournalEditForm);
