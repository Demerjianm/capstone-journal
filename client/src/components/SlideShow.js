import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFiveEntries } from '../actions/slideshow';
import { Carousel } from 'react-responsive-carousel';
import { Header } from 'semantic-ui-react';
import 'react-responsive-carousel/lib/styles/main.css';
import 'react-responsive-carousel/lib/styles/carousel.css';

class SlideShow extends Component {
  componentDidMount() {
    this.props.dispatch(getFiveEntries());
  }

  render() {
    const renderJournals = this.props.topFive.map(journal => {
      return (
        <div>
          <img src={journal.image} />
          <p className="legend">{journal.title}</p>
        </div>
      )
    })

    return (
      //add style to carousel - may get it override the default style sheet.
      <Carousel axis="horizontal" showThumbs={false} showArrows={true}>
        {renderJournals}
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
