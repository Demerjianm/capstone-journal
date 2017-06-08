import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateEntry } from '../actions/journalentry';

class JournalEditForm extends Component {
  entry = this.props.entries.find( ent => ent._id === this.props.id);

render() {
    let { title, body, _id } = this.entry

  return (
    <div>
      <h5 className="center">Update your Journal Entry</h5>
      <form
        ref={ n => this.form = n }
        onSubmit={ e => {
          e.preventDefault();
          this.props.toggleEdit()
          this.props.dispatch(updateEntry( _id , this.title.value, this.body.value))
        }}
      >
        <input ref={ n => this.title = n } placeholder={title} />
        <textarea ref={ n => this.body = n } placeholder={body} />
        <button className="btn">Save</button>
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
