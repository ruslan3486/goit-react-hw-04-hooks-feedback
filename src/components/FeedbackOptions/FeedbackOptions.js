// import React from 'react';
import s from "./feedback.module.css";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <button
        className={s.button_name}
        name="good"
        type="button"
        onClick={onLeaveFeedback}
      >
        Good
      </button>

      <button
        className={s.button_name}
        name="neutral"
        type="button"
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>

      <button
        className={s.button_name}
        name="bad"
        type="button"
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </>
  );
};

export default FeedbackOptions;
