import React from 'react';
import { connect } from 'react-redux';
import { Header, Container, Image, Divider } from 'semantic-ui-react';
import JL_Logo from '../images/JL_Logo.jpg'

const About = ({ username }) => (
  <Container text>
    <Image src={JL_Logo} centered size='medium' />
    <Divider />
    <Header as="h2" textAlign='center'>About Journal Love</Header>
  </Container>
)

const mapStateToProps = (state) => {
  return { username: state.user.username }
}

export default connect(mapStateToProps)(About);
