import React from 'react';
import ReviewIndexItem from './review_index_item';
import ReviewFormContainer from './review_form_container';

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
        reviewBlocks.unshift(
          <div className="row" key={id}>
            <ReviewIndexItem review={review} key={id}/>
          </div>
        );
      }
    }

    return (
      <div className="reviews-index-container clearfix">
        <ReviewFormContainer spotId={this.props.spotId} />
        {reviewBlocks}
      </div>
    );
  }
}

export default ReviewIndex;
