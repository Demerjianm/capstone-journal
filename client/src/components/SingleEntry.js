import React, { Component } from 'react';
import { Header, Image, Divider, Container, Item, Label } from 'semantic-ui-react';
import Timestamp from 'react-timestamp';
import { getEntries, updateEntry, deleteEntry } from '../actions/journalentry';
import { connect } from 'react-redux';
import JournalEditForm from './JournalEditForm';

class SingleEntry extends Component {

  state = { edit: false, id: ''}

  componentDidMount() {
    this.props.dispatch(getEntries())
  }

  displayEntry = () => {
    let { entry: ent, dispatch } = this.props;

      if (ent.body) {
        console.log(ent.body)
        let body = ent.body.split('\n').map( b => b === '' ? <br /> : b);
        let string = ent.body.trim().replace(/\n/, '<br />');
        return (
          <Container text>
            <Header as ='h1'>{ent.title}</Header>
            <Timestamp time={ ent.createdAt } format="date" className='cinema' />
            <Divider />
            <Item>
                <Image src={ent.image} size='large' centered />
            </Item>
            <Divider />
            <div>{body}</div>
              <div style={{ cursor: 'pointer' }}>
                <Label icon='edit' size='large' onClick={() => this.toggleEdit(ent._id)} content='Edit' />
                <Label icon='trash outline' size='large' onClick={() => this.props.dispatch(deleteEntry(ent._id))} content='Delete' />
              </div>
            </Container>
          )
      }
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
