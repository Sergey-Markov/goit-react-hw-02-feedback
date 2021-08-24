import { Component } from 'react';
import Button from './Button';

class FeedbackCard extends Component {
  static defaultProps = {
    initialValueGood: 0,
    initialValueNeutral: 0,
    initialValueBad: 0,
    initialValueTotal: 0,
    initialValuePositiveFeedback: 0,
  };

  state = {
    good: this.props.initialValueGood,
    neutral: this.props.initialValueNeutral,
    bad: this.props.initialValueBad,
    total: this.props.initialValueBad,
    positiveFeedback: this.props.initialValueBad,
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
  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState.total + 1,
    }));
  };
  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      positiveFeedback:
        prevState.positiveFeedback +
        (100 / (this.countGood + this.countBad)) * this.countGood,
    }));
  };
  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <Button
          countGood={this.countGood}
          countNeutral={this.countBad}
          countBad={this.countNeutral}
        />
        <h2>Statistics</h2>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {this.state.total}</li>
          <li>Positive feedback: {this.state.positiveFeedback}%</li>
        </ul>
      </div>
    );
  }
}

export default FeedbackCard;
