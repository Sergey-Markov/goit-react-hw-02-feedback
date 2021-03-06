import { Component } from 'react';
import './App.css';
import Section from './Components/Section';
import Button from './Components/FeedbackCard/FeedbackOptions';
import Statistics from './Components/Statistics';
import Notification from './Components/Notification';

class App extends Component {
  static defaultProps = {
    initialValueGood: 0,
    initialValueNeutral: 0,
    initialValueBad: 0,
  };

  state = {
    good: this.props.initialValueGood,
    neutral: this.props.initialValueNeutral,
    bad: this.props.initialValueBad,
  };

  countGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  countBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  countNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  countTotalFeedback = (good, bad, neutral) => {
    const total = good + bad + neutral;
    return total;
  };
  countPositiveFeedbackPercentage = (good, total) => {
    const countPercentage = Math.round((100 * good) / total);
    return countPercentage;
  };

  onLeaveFeedback = e => {
    const value = e.target.textContent.toLowerCase();
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };

  render() {
    const total = this.countTotalFeedback(
      this.state.good,
      this.state.bad,
      this.state.neutral,
    );
    const countPercentage = this.countPositiveFeedbackPercentage(
      this.state.good,
      total,
    );

    return (
      <div className="App">
        <Section title="Please leave feedback">
          <Button
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={countPercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
