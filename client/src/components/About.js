import React from 'react';
import { connect } from 'react-redux';
import { Header, Container } from 'semantic-ui-react';

const About = ({ username }) => (
  <Container>
    <Header as="h3">
      This is the about page.
    </Header>
  </Container>
)

const mapStateToProps = (state) => {
  return { username: state.user.username }
}

export default connect(mapStateToProps)(About);
