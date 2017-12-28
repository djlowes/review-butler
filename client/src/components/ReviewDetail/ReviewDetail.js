import React from "react";
import "./ReviewDetail.css";
import StarIcon from "../../components/StarIcon";
import Sentence from "../../components/Sentence";
import Tag from "../../components/Tag";

import Moment from "react-moment";


const ReviewDetail = ({ review, onRespondedClicked }) => {
    if (!review) {
        return <div>Loading...</div>;
    }

    //display a number of StarIcon components based rating (1 - 5)
    let stars = [];
    for (var i = review.rating - 1; i >= 0; i--) {
        stars.push(<StarIcon key={i}/>);
    }

    //display the color coded sentences based on sentiment (green = positive, red = negative)
    let sentences = [];
    review.sentences_object.forEach((sentence, i) => {
	   	sentences.push(<Sentence score={sentence.sentiment.score} text={sentence.text.content} key={i}/>);
    });

    //display the color coded sentences based on sentiment (green = positive, red = negative)
    let tags = [];
    review.tags.forEach((tag, i) => {
	    const score = tag.sentiment.score;
	    const salience = tag.sentiment.salience;
		//if the score is not neutral display the tag
		if (score) {
			tags.push(<Tag score={score} salience= {salience} name={tag.name} key={i}/>);
		}
    });

    return (
        <div className="float-md-left">
			<div className="review-container full-height review-detail">
				<p><strong>title: </strong>{review.title}</p>
				<p><strong>Sentences text: </strong>{sentences}</p>
				<strong>Tags: </strong>{tags}
				<li><strong>user_name: </strong>{review.user_name}</li>
				<li><strong>Rating: </strong>{review.Rating}{stars}</li>
				<li><strong>response_text: </strong>{review.response_text} <button onClick={() => onRespondedClicked(review._id)}>set responded</button></li>
				<li><strong>sentiment_score: </strong>{review.sentiment_score}</li>
				<li><strong>word_count: </strong>{review.word_count}</li>
				<li><strong>review_date: </strong><Moment date={review.review_date} format="MM/DD/YYYY"/></li>
				<li><strong>response_date: </strong>{review.response_date}</li>
				<li><strong>photo: </strong>{review.photo}</li>
				<li><strong>review_read: </strong>{review.review_read}</li>
				<li><strong>business_id: </strong>{review.business_id}</li>
				<li><strong>timestamp: </strong>{review.timestamp}</li>
				<li><strong>external_id: </strong>{review.external_id}</li>
				
			</div>
		</div>
    );
};

export default ReviewDetail;