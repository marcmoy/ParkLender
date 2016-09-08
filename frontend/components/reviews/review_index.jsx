import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let reviews = this.props.reviews;
    let reviewBlocks = [];

    for (let id in reviews) {
      if (id) {
        let review = reviews[id];
        reviewBlocks.push(<ReviewIndexItem review={review} key={id}/>);
      }
    }

    return (
      <div className="reviews-index-container">
        {reviewBlocks}
      </div>
    );
  }
}

export default ReviewIndex;
