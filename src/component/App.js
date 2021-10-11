import React, { Component } from 'react';
import Section from './Section/Section';
import Container from './Container/Container';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import FeedbackOptions from './Feedback/FeedbackOptions ';

class Counter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = e => {
    this.setState(state => ({
      [e]: state[e] + 1,
    }));
  };

  countTotalFeedback = () => {
    const sum = Object.values(this.state).reduce((a, b) => a + b, 0);
    return sum;
  };

  countPositiveFeedbackPercentage = () => {
    const percentage = Math.round((this.state.good / this.countTotalFeedback()) * 100);
    return percentage;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const obj = Object.keys(this.state);
    const feedback = this.onLeaveFeedback;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions options={obj} onLeaveFeedback={feedback} />
        </Section>
        <h2 title="Statistics"> </h2>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification title="No feedback given"></Notification>
          )}
        </Section>
      </Container>
    );
  }
}

export default Counter;
