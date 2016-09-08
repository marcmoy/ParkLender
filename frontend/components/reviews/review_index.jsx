import React from 'react';
import ReviewIndexItem from './review_index_item';
import ReviewForm from './review_form';

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
        reviewBlocks.push(
          <div className="row" key={id}>
            <ReviewIndexItem review={review} key={id}/>
          </div>
        );
      }
    }

    return (
      <div className="reviews-index-container clearfix">
        <ReviewForm spot={this.props.spot}
          currentUser={this.props.currentUser} />
        {reviewBlocks}
      </div>
    );
  }
}

export default ReviewIndex;
