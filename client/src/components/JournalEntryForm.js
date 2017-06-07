import React from 'react';
import { connect } from 'react-redux';
import { addEntry } from '../actions/journalentry';

const JournalEntryForm = ({ dispatch }) => {
  let title, body, form;


  return (
    <div>
      <h5 className="center">Add A Journal Entry</h5>
      <form
        ref={ n => form = n }
        onSubmit={ e => {
          e.preventDefault();
          dispatch(addEntry(title.value, body.value))
          form.reset();
        }}
      >
        <input ref={ n => title = n } placeholder="Title" />
        <textarea ref={ n => body = n } placeholder="Entry Body"></textarea>
        <button className="btn">Save</button>
      </form>
    </div>
  )
}

// when you connect a component, you get dispatch as a prop
// mapStateToProps - grabs state out of redux and passes it as props
export default connect()(JournalEntryForm);