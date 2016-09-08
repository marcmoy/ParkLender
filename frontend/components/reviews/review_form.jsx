import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

$.fn.reviewFormFollow = function () {
    let $this = this,
        $window = $(window);

    // listen for scroll
    $window.scroll(function (e) {

        // grabs window's scroll position
        let scroll = $window.scrollTop();
        if (scroll <= 1300) {
          $this.css({
              position: 'absolute',
              top: 50
          });
        } else {
          $this.css({
              position: 'fixed',
              top: 200
          });
        }
    });
};

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    let authorId, spotId, userId;
    if (this.props.currentUser) authorId = this.props.currentUser.id;
    if (this.props.spotId) spotId = this.props.spotId;
    // if (this.props.user) userId = this.props.user.id;
    this.state = {
      author_id: authorId,
      spot_id: spotId,
      // user_id: userId,
      rating: 0,
      content: "",
      disabled: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onStarClick = this.onStarClick.bind(this);
    this.updateContent = this.updateContent.bind(this);
    this.showUserAlert = this.showUserAlert.bind(this);
  }

  componentDidMount() {
    $('.review-form-container').reviewFormFollow();
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.props.currentUser) {
      this.showUserAlert();
    } else {
      const data = {
        review: {
          author_id: this.state.author_id,
          spot_id: this.state.spot_id,
          rating: this.state.rating,
          content: this.state.content
        }
      };

      this.setState({ disabled: true });
      this.props.createSpotReview(data);
    }
  }

  showUserAlert(){
    msgBot.show('MUST TO BE LOGGED IN TO WRITE A REVIEW', {
      time: 2000,
      type: 'error'
    });
  }

  onStarClick(nextValue) {
    this.setState({ rating: nextValue });
  }

  updateContent(e) {
    this.setState({ content: e.currentTarget.value });
  }

  render() {

    return(
      <form className="review-form-container" onSubmit={this.handleSubmit}>
        <div className="write-a-review">
          <span>Write a Review</span>
        </div>
        <div className="review-form-content">

          <div className="row">
            <div className="review-stars-container">
              <StarRatingComponent name="rating" value={this.state.rating}
                onStarClick={this.onStarClick} editing={true}/>
            </div>
          </div>

          <div className="row">
            <textarea className="review-content-container"
              placeholder="Tell us what you think"
              onChange={this.updateContent}>
            </textarea>
          </div>

          <div className="row">
            <button>Post Review</button>
          </div>
        </div>
      </form>
    );
  }

}

export default ReviewForm;
