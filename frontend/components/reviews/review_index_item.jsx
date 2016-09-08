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
        <aside className="review-host-photo-container">
          <img src={author.photo.url} />
          <span>{author.username}</span>
        </aside>
        <main className="review-content-container">
          {review.content}
            <br/>
          {review.date}
        </main>
      </div>
    );
  }
}

export default ReviewIndexItem;
