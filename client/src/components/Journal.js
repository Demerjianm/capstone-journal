import React from 'react';
import { Header } from 'semantic-ui-react';
import { connect } from 'react-redux';

const Journal = ({ _id, username, role }) => (
  <div>
    <Header as="h2">{username}</Header>
    <Header as="h3">{_id}</Header>
    <Header as="h3">{role}</Header>
  </div>
)

const mapStateToProps = (state) => {
  return { ...state.user }
}

export default connect(mapStateToProps)(Journal);
