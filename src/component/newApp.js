import React, { useState } from 'react';
import Section from './Section/Section';
import Container from './Container/Container';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import FeedbackOptions from './Feedback/FeedbackOptions ';

export default function Counter() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveGoodFeedback = index => {
    switch (index) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const sum = good + neutral + bad;
    return sum;
  };

  const countPositiveFeedbackPercentage = () => {
    const percentage = Math.round((good / countTotalFeedback()) * 100);
    return percentage;
  };
  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveGoodFeedback}
        />
      </Section>
      <h2 title="Statistics"> </h2>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification title="No feedback given"></Notification>
        )}
      </Section>
    </Container>
  );
}
