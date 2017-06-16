import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFiveEntries } from '../actions/slideshow';
import { Carousel } from 'nuka-carousel';
import { Header } from 'semantic-ui-react';

class SlideShow extends Component {

  componentDidMount() {
    this.props.dispatch(getFiveEntries());
  }

//  mixins: [Carousel.ControllerMixin]

// displayTopFive = () => {
//   return this.props.entries.map( entry => {
//     return (
//         <img src={entry.image}/>
//       )
//   })
// }

  render() {
    console.log(this.props.topFive);
    return (
        <Header>Hello</Header>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    topFive: state.topFive
  }
}

export default connect(mapStateToProps)(SlideShow);
