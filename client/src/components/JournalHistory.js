import React, { Component } from 'react';
import Timestamp from 'react-timestamp';
import { Header, Image, Icons, List, Item, Label, Grid, Container, Divider } from 'semantic-ui-react';
import { getEntries, updateEntry, deleteEntry } from '../actions/journalentry';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import JournalEditForm from './JournalEditForm';
import SingleEntry from './SingleEntry';

class JournalHistory extends Component {

  state = { edit: false, id: ''}

  componentDidMount() {
    this.props.dispatch(getEntries())
  }


  displayEntries = () => {
     return this.props.entry.map( ent => {
      return (
        <Item key={ent._id}>
          <Item.Image size='small' src={ ent.image } />

          <Item.Content>
            <Item.Header as='a' href={"/SingleEntry/" + ent._id}>{ ent.title }</Item.Header>
            <Item.Meta>
              <Timestamp time={ ent.created_at } format="date" className='cinema' />
            </Item.Meta>
            <Item.Description>{ ent.body }</Item.Description>
            <Item.Extra>
              <Label icon='edit' size='large' onClick={() => this.toggleEdit(ent._id)} content='Edit' />
              <Label icon='trash outline' size='large' floated='right' onClick={() => this.props.dispatch(deleteEntry(ent._id))} content='Delete' />
            </Item.Extra>
          </Item.Content>
        </Item>
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
        <Header as='h3' textAlign='center'>My Journal</Header>
        <Divider />
        <Item.Group divided>
          { this.displayEntries() }
        </Item.Group>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { entry: state.journal }
}

export default connect(mapStateToProps)(JournalHistory);
