import { useEffect, useState } from 'react';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './components/statistics/statistics';
import { Section } from './components/Section/section';

export const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [total, setTotal] = useState(0);
    const [positivePercentage, setPositivePercentage] = useState(0);
    const state = { good, neutral, bad };

    const onClick = e => {
        switch (e.target.name) {
            case 'good':
                setGood(prevState => prevState + 1);
                break;
            case 'neutral':
                setNeutral(prevState => prevState + 1);
                break;
            case 'bad':
                setBad(prevState => prevState + 1);
                break;
            default:
                return;
        }
    };
    useEffect(() => {
        setTotal(good + neutral + bad);
    }, [good, neutral, bad]);

    useEffect(() => {
        setPositivePercentage(Math.round((good / total) * 100));
    }, [good, total]);

    return (
        <div>
            <Section title="Please leave feedback">
                <FeedbackOptions options={state} onLeaveFeedback={onClick} />
            </Section>
            <Section title="Statistics">
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={total}
                    positivePercentage={positivePercentage}
                />
            </Section>
        </div>
    );
};
