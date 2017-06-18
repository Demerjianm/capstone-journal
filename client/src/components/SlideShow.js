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
      <Carousel ref="carousel" data={this.setCarouselData.bind(this, 'carousel')}>
        <img src="http://res.cloudinary.com/journal-love/image/upload/v1497576672/fnou9dw9mzwfildhsax1.jpg"/>
        <img src="http://res.cloudinary.com/journal-love/image/upload/v1497576672/fnou9dw9mzwfildhsax1.jpg"/>
        <img src="http://res.cloudinary.com/journal-love/image/upload/v1497576672/fnou9dw9mzwfildhsax1.jpg"/>
        <img src="http://res.cloudinary.com/journal-love/image/upload/v1497576672/fnou9dw9mzwfildhsax1.jpg"/>
        <img src="http://res.cloudinary.com/journal-love/image/upload/v1497576672/fnou9dw9mzwfildhsax1.jpg"/>
    </Carousel>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    topFive: state.topFive
  }
}

export default connect(mapStateToProps)(SlideShow);
