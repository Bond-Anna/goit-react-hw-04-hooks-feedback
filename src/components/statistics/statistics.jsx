import PropTypes from 'prop-types';
import css from './stat.module.css';
import { Notification } from '../Notification';
export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) => {
    return good === 0 && neutral === 0 && bad === 0 ? (
        <Notification message="No feedback given" />
    ) : (
        <>
            <p className={css.stats}>
                Good: <span className={css.statsCount}>{good}</span>
            </p>
            <p className={css.stats}>
                Neutral: <span className={css.statsCount}>{neutral}</span>
            </p>
            <p className={css.stats}>
                Bad: <span className={css.statsCount}>{bad}</span>
            </p>
            <p className={css.stats}>
                Total: <span className={css.statsCount}>{total}</span>
            </p>
            <p className={css.stats}>
                Positive feedback:{' '}
                <span className={css.statsCount}>{positivePercentage}%</span>
            </p>
        </>
    );
};

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
};
