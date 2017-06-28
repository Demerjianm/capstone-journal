import React, { Component } from 'react';
import { Header, Image, Icons, List } from 'semantic-ui-react';
import Timestamp from 'react-timestamp';
import { getEntries, updateEntry, deleteEntry } from '../actions/journalentry';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import JournalEditForm from './JournalEditForm';
import JournalHistory from './JournalHistory';

class SingleEntry extends Component {

  state = { edit: false, id: ''}

  componentDidMount() {
    this.props.dispatch(getEntries())
  }

  onDelete = id => {
    const { history, dispatch } = this.props;
    dispatch(deleteEntry(id))
    history.push('/history')
  }

  displayEntry = () => {
    let { entry: ent, dispatch } = this.props;
      return (
        <div className="container">
          <h1>{ent.title}</h1>
          <Timestamp time={ ent.created_at } format="date" className='cinema' />
          <hr />
          <br />
          <div className='item'>
              <Image src={ent.image} size='large' center />
          </div>
          <br />
          <p>{ent.body}</p>
            <div style={{ cursor: 'pointer' }}>
              <i className="big edit icon" onClick={() => this.toggleEdit(ent._id)}></i>
              <i className="big trash basic icon" onClick={() => this.onDelete(ent._id)}></i>
            </div>
          </div>
        )
    }

  toggleEdit = (id) => {
    this.setState({ edit: !this.state.edit, id })
  }

  updateEntry = (title, body) => {
    let { dispatch, entry, history } = this.props
    dispatch(updateEntry(entry._id, title, body ))
    history.push('/journal')
  }

  render () {
    let state = this.props
    return (
      <div>
        {this.state.edit ?
          <JournalEditForm
            id={this.state.id}
            toggleEdit={this.toggleEdit}
            updateEntry={this.updateEntry}/>
          : this.displayEntry() }
      </div>
    )
  }

}

const mapStateToProps = (state, props) => {
  let entry = state.journal.find( j => j._id === props.match.params.id ) || {}
  return { entry }
}

export default connect(mapStateToProps)(SingleEntry)
