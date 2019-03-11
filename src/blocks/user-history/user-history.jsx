import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import get from 'lodash/get';

import PageNumber from '../../decorators/page-number';
import Slider from '../../common.components/slider';
import DeviceHistoryCard from './__device-card';
import DoorHistoryCard from './__door-card';

const classNames = cn('user-history');

class UserHistory extends React.PureComponent {
    constructor(props) {
        super(props);

        props.pageNumber.setCallback(this._fetchUserHistory);
    }

    componentDidMount() {
        this._fetchUserHistory();
    }

    componentWillReceiveProps(nextProps) {
        const { device, pageNumber } = this.props;

        if (device !== nextProps.device) {
            pageNumber.reset();
        }
    }

    /**
     * Запрос новой страницы истории пользователя
     *
     * @returns {void}
     * @private
     */
    _fetchUserHistory = () => {
        const { login, itemsPerPage, getUserHistory, pageNumber } = this.props;

        getUserHistory(login, pageNumber.value(), itemsPerPage);
    }

    render() {
        const { history, itemsPerPage, login, pageNumber, openCard } = this.props;
        const showHistory = get(history, 'rows.0.login') === login;

        return (
            <div className={classNames()}>
                {showHistory &&
                    <Slider
                        type="user"
                        pageNumber={pageNumber}
                        itemsPerPage={itemsPerPage}
                        totalCount={history.totalCount}
                        title={console.log('history')}
                    >console.loconsole.log
                        {history.rows.map(card => ['doorClose', 'doorOpen'].includes(card.location) ?
                            <DoorHistoryCard key={card.ts} {...card} /> :
                            <DeviceHistoryCard key={card.ts} openCard={openCard} {...card} />
                        )}
                    </Slider>
                }
            </div>
        );
    }

    static propTypes = {
        device: PropTypes.object,
        pageNumber: PropTypes.object.isRequired,
        getUserHistory: PropTypes.func,
        history: PropTypes.object,
        login: PropTypes.string.isRequired,
        itemsPerPage: PropTypes.number.isRequired,
        openCard: PropTypes.func.isRequired
    }
}

export default PageNumber(UserHistory);
