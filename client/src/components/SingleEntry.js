import React, { Component } from 'react';
import { Header, Image, Icons, List } from 'semantic-ui-react';
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

  displayEntries = () => {
    const ent = this.props.ent._id
      return (
          <div className="container">
            <h3>{this.props.ent.title}</h3>
            <p>{this.props.ent.body}</p>
            <div className='item'>
              <h4>Images</h4>
                <Image src={ent.image} size='medium' />
            </div>
              <div style={{ cursor: 'pointer' }}>
                <i className="big edit icon" onClick={() => this.toggleEdit(ent._id)}></i>
                <i className="big trash basic icon" onClick={() => this.props.dispatch(deleteEntry(ent._id))}></i>
              </div>
          </div>
      )
    };


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
      <div className='container'>
        {this.props.entry._id}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { entry: state.journal }
}

export default connect(mapStateToProps)(SingleEntry)
