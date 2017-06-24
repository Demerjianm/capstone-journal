import React, { Component } from 'react';
import Timestamp from 'react-timestamp';
import { Header, Image as ImageComponent, Icon, List, Item, Label } from 'semantic-ui-react';
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
        // <li key={ent._id} className="collection-item">
        //   <div className='ui list'>
        //     <div className='item'>
        //       <h4>Title</h4>
        //         { ent.title }
        //     </div>
        //     <div className='item'>
        //       <h5>Body</h5>
        //         { ent.body }
        //     </div>
        //     <div className='item'>
        //       <h4>Images</h4>
        //         <Image src={ent.image} size='small' />
        //     </div>
        //       <div style={{ cursor: 'pointer' }}>
        //         <i className="big edit icon" onClick={() => this.toggleEdit(ent._id)}></i>
        //         <i className="big trash basic icon" onClick={() => this.props.dispatch(deleteEntry(ent._id))}></i>
        //       </div>
        //   </div>
        // </li>

        <Item.Group divided>
          <Item>
            <Item.Image size='small' src={ ent.image } />

            <Item.Content>
              <Item.Header as='a'>{ ent.title }</Item.Header>
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
        </Item.Group>
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
