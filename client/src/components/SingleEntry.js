import React, { Component } from 'react';
import { Header, Image, Icons, List, Divider, Container, Item, Label } from 'semantic-ui-react';
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
        <Container text>
          <Header as ='h1'>{ent.title}</Header>
          <Timestamp time={ ent.createdAt } format="date" className='cinema' />
          <Divider />
          <Item>
              <Image src={ent.image} size='large' centered />
          </Item>
          <Divider />
          <p>{ent.body}</p>
            <div style={{ cursor: 'pointer' }}>
<<<<<<< HEAD
              <Label icon='edit' size='large' onClick={() => this.toggleEdit(ent._id)} content='Edit' />
              <Label icon='trash outline' size='large' onClick={() => this.props.dispatch(deleteEntry(ent._id))} content='Delete' />
=======
              <i className="big edit icon" onClick={() => this.toggleEdit(ent._id)}></i>
              <i className="big trash basic icon" onClick={() => this.onDelete(ent._id)}></i>
>>>>>>> 913a93cb89acd7155a31ddfc9a00a5217709db8e
            </div>
          </Container>
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
    console.log(this.props.history)
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
