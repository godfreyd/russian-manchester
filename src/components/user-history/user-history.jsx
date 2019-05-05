import React from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';
import get from 'lodash/get';

import PageNumber from '../../decorators/page-number';

import Slider from '../../common.components/slider';

import ProductHistoryCard from './__product-card';
import DoorHistoryCard from './__door-card';

import i18n from '../i18n';

const cn = withNaming({ e: '__', m: '_', v: '_' });
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
        const { product, pageNumber } = this.props;

        if (product !== nextProps.product) {
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
                        title={i18n('history')}
                    >
                        {history.rows.map(card => {
                            const isDoorCard = globalConfig.locations.door.includes(card.location);

                            return isDoorCard ?
                                <DoorHistoryCard key={card.id} {...card} /> :
                                <ProductHistoryCard key={card.id} openCard={openCard} {...card} />;
                        })}
                    </Slider>
                }
            </div>
        );
    }

    static propTypes = {
        product: PropTypes.object,
        pageNumber: PropTypes.object.isRequired,
        getUserHistory: PropTypes.func,
        history: PropTypes.object,
        login: PropTypes.string.isRequired,
        itemsPerPage: PropTypes.number.isRequired,
        openCard: PropTypes.func.isRequired
    }
}

export default PageNumber(UserHistory);
