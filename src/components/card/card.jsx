import "./card.css";
import Button from "../button/button.jsx";
import React from "react";

const Card = (props) => {
	const [count, setCount] = React.useState(0);
	const { job, onAddItem, onRemoveItem } = props;

	const handleIncrement = () => {
		setCount((prev) => prev + 1);
		onAddItem(job);
	};

	const handleDecrement = () => {
		onRemoveItem(job);
		setCount((prev) => prev - 1);
	};

	return (
		<div className="card">
			<span className={`${count !== 0 ? "card__badge" : "card__badge-hidden"}`}>{count}</span>
			<div className="image__container">
				<img src={job.Image} alt={job.title} width={"100%"} height={"230px"} />
			</div>
			<div className="card__body">
				<h2 className="card__title">{job.title}</h2>
				<div className="card__price">
					{job.price.toLocaleString("en-US", {
						style: "currency",
						currency: "USD",
					})}
				</div>
			</div>
			<div className="hr"></div>
			<div className="btn__container">
				<Button title={"+"} onClick={handleIncrement} type={"add"} />
				{count !== 0 && <Button title={"-"} onClick={handleDecrement} type={"remove"} />}
			</div>
		</div>
	);
};

export default Card;
