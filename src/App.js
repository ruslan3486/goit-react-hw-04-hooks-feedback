import { useState } from "react";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";
import FeedbackMessage from "./components/FeedbackMessage/FeedbackMessage";

const App = () => {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //  const onLeaveFeedback = option => {
  //     this.setState(state => ({
  //       [option]: state[option] + 1,
  //     }));
  //   };

  const countTotalFeedback = (e) => {
    // return Object.values(this.state).reduce((acc, option) => acc + option, 0);
    switch (e.target.name) {
      case "good":
        return setGood((prevState) => prevState + 1);
      case "neutral":
        return setNeutral((prevState) => prevState + 1);
      case "bad":
        return setBad((prevState) => prevState + 1);
    }
  };

  const total = good + bad + neutral;
  const countPositiveFeedbackPercentage = () => {
    // const { good } = this.state;
    return Math.round((good / total) * 100);
  };

  // const options = Object.keys(this.state);
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          // options={options}
          onLeaveFeedback={countTotalFeedback}
        />
      </Section>

      <Section title="Statistic">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
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
//  <Section title="Please leave feedback">
