import React from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';

const About = ({ username }) => (
  <div>
    <Header as="h3">
      { username ? `Welcome ${username}` : 'This is the About page' }
    </Header>
  </div>
)

const mapStateToProps = (state) => {
  return { username: state.user.username }
}

export default connect(mapStateToProps)(About);
