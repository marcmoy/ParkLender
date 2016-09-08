import React from 'react';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let review = this.props.review;
    let author = review.author;

    return(
      <div className="review-index-item-container">
        <div className="review-host-photo-container">
          <img src={author.photoUrl} />
          <span>{author.username}</span>
        </div>
        <div className="review-content-container">
          "{review.content}"
            <br/>
            <br/>
          <span className="review-date">
            {review.date}
          </span>
        </div>
      </div>
    );
  }
}

export default ReviewIndexItem;
