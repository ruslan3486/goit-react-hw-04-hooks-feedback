import { useState } from "react";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";
import FeedbackMessage from "./components/FeedbackMessage/FeedbackMessage";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = good + bad + neutral;

  const increment = (e) => {
    switch (e.target.name) {
      case "good":
        return setGood((prevState) => prevState + 1);
        break;

      case "neutral":
        return setNeutral((prevState) => prevState + 1);
        break;

      case "bad":
        return setBad((prevState) => prevState + 1);
        break;

      default:
        break;
    }
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback) * 100);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={increment} />
      </Section>

      <Section title="Statistic">
        {countTotalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <FeedbackMessage />
        )}
      </Section>
    </>
  );
};
export default App;
