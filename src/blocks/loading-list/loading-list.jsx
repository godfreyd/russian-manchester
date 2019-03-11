import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import isEqual from 'lodash/isEqual';
import pick from 'lodash/pick';

import Spin from '../../common.blocks/spin';

import LoadingListItem from './__item';

import './loading-list.css';

const classNames = cn('loading-list');

class LoadingList extends React.PureComponent {
    _scrollPadding = 3

    constructor(props) {
        super(props);

        this._settingsProps = ['id', 'options', 'type', 'entityType', 'update'];

        this._elems = {};
    }

    componentDidMount() {
        this
            ._bindEvents()
            ._resetList();
    }

    componentWillReceiveProps(nextProps) {
        const settings = pick(this.props, this._settingsProps);
        const nextSettings = pick(nextProps, this._settingsProps);

        if (!isEqual(settings, nextSettings)) {
            this._resetList();

            return;
        }

        if (nextProps.onLoad && this._hasLoaded(nextProps)) {
            nextProps.onLoad();
        }
    }

    componentWillUnmount() {
        this._unbindEvents();
    }

    _resetList = () => {
        this._pageNumber = 0;
        this._itemsPerPage = {
            slotHistory: 30,
            history: 30,
            subscriptions: 10
        }[this.props.type];

        this._fetchItems(true);
    }

    _hasLoaded = nextProps => {
        const { list: { rows } } = this.props;
        const { list: { rows: nextRows } } = nextProps;

        return !rows && nextRows;
    }

    _bindEvents = () => {
        this._elems.list.addEventListener('scroll', this._onScroll);

        return this;
    }

    _unbindEvents = () => {
        this._elems.list.removeEventListener('scroll', this._onScroll);

        return this;
    }

    _fetchItems = force => {
        const { id, options, list, fetchItems } = this.props;
        const hasMore = this._pageNumber === 0 || list.rows.length < list.totalCount;

        if (!force && (!hasMore || list.isLoading)) {
            return;
        }

        this._pageNumber += 1;

        fetchItems(id, this._pageNumber, this._itemsPerPage, options);
    }

    _onScroll = () => {
        this._updateScrollProgress();

        if (this._scrollProgress === 1) {
            this._fetchItems();
        }

        return this;
    }

    _updateScrollProgress = () => {
        const { scrollTop, scrollHeight, clientHeight } = this._elems.list;

        const maxScrollPos = scrollHeight - clientHeight;
        const scrollPos = scrollTop + this._scrollPadding;

        const progress = scrollPos / maxScrollPos;

        this._scrollProgress = this._clampUnit(progress);

        return this;
    }

    _clampUnit = value => Math.min(Math.max(value, 0), 1)

    _cacheList = elem => {
        this._elems.list = elem;
    }

    render() {
        const { list, type, entityType, theme = 'white' } = this.props;
        const hasLoaded = this._pageNumber > 0 && list.rows;
        const isEmpty = hasLoaded && list.rows.length === 0;

        return (
            <div className={classNames({ loading: list.isLoading, theme })}>
                <div className={classNames('list')} ref={this._cacheList}>
                    {hasLoaded && list.rows.map(item => (
                        <LoadingListItem
                            key={item.id || item.position}
                            item={item}
                            type={type}
                            entityType={entityType}
                        />
                    ))}
                    {isEmpty && (
                        <div className={classNames('empty')}>
                            {console.log(`empty ${type}`)}
                        </div>
                    )}
                </div>
                <header className={classNames('title')}>
                    {console.log(type)}
                </header>
                <div className={classNames('loader')}>
                    <Spin size="m" progress={list.isLoading} />
                </div>
            </div>
        );
    }

    static propTypes = {
        id: PropTypes.string.isRequired,
        options: PropTypes.object,
        type: PropTypes.oneOf(['history', 'slotHistory', 'subscriptions']).isRequired,
        entityType: PropTypes.oneOf(['device', 'tesseract', 'user']).isRequired,
        theme: PropTypes.oneOf(['white', 'blue']),
        onLoad: PropTypes.func,

        list: PropTypes.object,
        fetchItems: PropTypes.func
    }
}

export default LoadingList;
