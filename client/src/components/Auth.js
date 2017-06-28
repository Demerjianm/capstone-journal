import React from 'react';
import { Header, Form, Button, Container } from 'semantic-ui-react';
import { authenticate } from '../actions/user';
import { connect } from 'react-redux';

class Auth extends React.Component {
  defaults = { email: '', password: '' }
  state = { ...this.defaults }

  handleChange = (e) => {
    let { target: { id, value }} = e;
    this.setState({ [id]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { title, history, dispatch } = this.props;
    let { email, password } = this.state;
    dispatch(authenticate(email, password, title, history))
  }

  render() {
    let { title } = this.props;
    let { email, password } = this.state;
    return (
      <Container>
        <Header as="h3">{title}</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            id="email"
            label="Email"
            required
            type="email"
            onChange={this.handleChange}
            value={email}
            width={8}
          />
          <Form.Input
            id="password"
            label="Password"
            required
            type="password"
            onChange={this.handleChange}
            value={password}
            width={8}
          />
          <Button>Submit</Button>
        </Form>
      </Container>
    )
  }
}

export default connect()(Auth);
