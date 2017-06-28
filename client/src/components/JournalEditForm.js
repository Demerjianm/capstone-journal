import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateEntry } from '../actions/journalentry';
import { Image, Buttons, Form } from 'semantic-ui-react';

class JournalEditForm extends Component {
  entry = this.props.entries.find( ent => ent._id === this.props.id);

render() {
    let { title, body, image, _id } = this.entry

  return (
    <div>
      <h5 className="center">Update your Journal Entry</h5>
      <form
        ref={ n => this.form = n }
        onSubmit={ e => {
          e.preventDefault();
          this.props.dispatch(updateEntry( _id , this.title.value, this.body.value, image))
          this.props.toggleEdit()
        }}
      >
        <div className='ui input'>
        <input ref={ n => this.title = n } defaultValue={title} />
        </div>
        <div className='ui input'>
        <textarea ref={ n => this.body = n } defaultValue={body} />
        </div>
        <Image src={image} size='medium' />
        <div className='ui buttons'>
          <button className='ui button' onClick={() => this.props.toggleEdit()}>Back</button>
        <div className='or'></div>
          <button className="ui button positive">Save</button>
        </div>
      </form>

    </div>
    )
  }
}

// when you connect a component, you get dispatch as a prop
// mapStateToProps - grabs state out of redux and passes it as props

const mapStateToProps = (state) => {
  return { entries: state.journal }
}
export default connect(mapStateToProps)(JournalEditForm);
