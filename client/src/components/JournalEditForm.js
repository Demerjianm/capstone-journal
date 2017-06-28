import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateEntry } from '../actions/journalentry';
import { Header, Image, Button, Form, Container } from 'semantic-ui-react';

class JournalEditForm extends Component {
  entry = this.props.entries.find( ent => ent._id === this.props.id);

render() {
    let { title, body, image, _id } = this.entry

  return (
    // <div>
    //   <Header as='h2' textAlign='center'>Update your Journal Entry</Header>
    //   <Form
    //     ref={ n => this.form = n }
    //     onSubmit={ e => {
    //       e.preventDefault();
    //       this.props.toggleEdit()
    //       this.props.dispatch(updateEntry( _id , this.title.value, this.body.value, this.image.value))
    //     }}
    //   >
    //     <div className='ui input'>
    //     <input ref={ n => this.title = n } defaultValue={title} />
    //     </div>
    //     <div className='ui input'>
    //     <textarea ref={ n => this.body = n } defaultValue={body} />
    //     </div>
    //     <Image src={image} size='medium' />
    //     <div className='ui buttons'>
    //       <button className='ui button' onClick={() => this.props.toggleEdit()}>Back</button>
    //     <div className='or'></div>
    //       <button className="ui button positive">Save</button>
    //     </div>
    //   </Form>
    //
    // </div>

    <Container text>
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
        <Form.Field>
          Title:<Form.Input ref={ n => this.title = n } defaultValue={title} />
        </Form.Field>
        <Form.Field>
          Entry:<Form.TextArea ref={ n => this.body = n } defaultValue={body} />
        </Form.Field>
        <Button type='submit'>Submit</Button>
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
