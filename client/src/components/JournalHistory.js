import React, { Component } from 'react';
import { Header, Image, Icons } from 'semantic-ui-react';
import { getEntries, updateEntry, deleteEntry } from '../actions/journalentry';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import JournalEditForm from './JournalEditForm'

class JournalHistory extends Component {

  state = { edit: false, id: ''}

  componentDidMount() {
    this.props.dispatch(getEntries())
  }

  displayEntries = () => {
     return this.props.entry.map( ent => {
      return (
        <li key={ent._id} className="collection-item">
          <div>
          <h4>Title</h4>
            { ent.title }
            <h5>Body</h5>
            { ent.body }
            <h5>Img Links</h5>
            <Image src={ent.image} size='tiny' />
            { ent.image }
            <div style={{ cursor: 'pointer' }}>
                <i className="big edit icon" onClick={() => this.toggleEdit(ent._id)}></i>
                <i className="big trash basic icon" onClick={() => this.props.dispatch(deleteEntry(ent._id))}></i>
            </div>
          </div>
        </li>
      )
    });
  }

  toggleEdit = (id) => {
    this.setState({ edit: !this.state.edit, id });

  }

  updateEntry = (title, body) => {
  let { dispatch, entry, history } = this.props
  dispatch(updateEntry(entry._id, title, body ))
  history.push('/journal')
  }

  render() {
    let state = this.props

    if(this.state.edit === true) {
      return <JournalEditForm
              id={this.state.id}
              toggleEdit={this.toggleEdit}
              updateEntry={this.updateEntry}
              />
    }
    return(
      <div className='col s12 m6'>
        <ul className='collection'>
          { this.displayEntries() }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { entry: state.journal }
}

export default connect(mapStateToProps)(JournalHistory);
