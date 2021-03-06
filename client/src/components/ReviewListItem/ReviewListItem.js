import React from "react";
import "./ReviewListItem.css";
import StarIcon from "../../components/StarIcon";
import Moment from "react-moment";

const ReviewListItem = ({review, onReviewClicked, active}) => {
	const reviewText = review.text;
	const reviewAuthor = review.user_name;
	let stars = [];

	let itemClass = "inactive";
	let iconName = "label";

	//change the icon to read
	if (review.review_read) {
		iconName = "label_outline";
	}

	//change the icon to responded
	if (review.response_date) {
		iconName = "reply";
	}

	//display a number of StarIcon components based rating (1 - 5)
	for (var i = 0; i < review.rating; i++) {
		 stars.push(<StarIcon key={i} size="small" />);
	}

	if (active) {
		itemClass= "active";
	}

	return (
		<li onClick={() => onReviewClicked(review._id)} className={itemClass}>
			
				<div className="review-item-icons">
					<i className="material-icons md-18 md-dark md-inactive">{iconName}</i>
				</div>
				<div className="review-item-details">
					<div className="review-item-heading">
						<div className="review-item-date float-right"><Moment date={review.review_date} format="MM/DD/YYYY"/></div>
						<div className="review-item-author">{reviewAuthor}</div>
					</div>
					<div className="review-item-rating">
						{stars}
					</div>
					<div className="review-item-snippet">
						{reviewText}
					</div>
				</div>

		</li>
		);

}

export default ReviewListItem;
