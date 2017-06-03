import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { getEntries } from '../actions/journalentry';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import JournalEntryForm from './JournalEntryForm';

class Journal extends Component {
  componentDidMount() {
    this.props.dispatch(getEntries());
  }


  displayEntries = () => {
     return this.props.entry.map( note => {
      return (
        <li key={entry._id} className="collection-item">
          <div>
            { entry.title }
            <span className="secondary-content">
              <Link to={`/journal/${entry._id}`}>
                <i className="material-icons">send</i>
              </Link>
            </span>
          </div>
        </li>
      )
    });
  }

  render() {
    return(
      <div className='container'>
      <div>
        <Header as="h2">{username}</Header>
        <Header as="h3">{_id}</Header>
        <Header as="h3">{role}</Header>
      </div>
        <h4>My Journal</h4>
        <hr />
        <div className='row'>
          <div className='col s12 m6'>
            <JournalEntryForm />
          </div>
          <div className='col s12 m6'>
            <ul className='collection'>
              { this.displayJournal() }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return { journal: state.journal }
}

export default connect(mapStateToProps)(Journal);
