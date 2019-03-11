import React from 'react';
import { cn } from '@bem-react/classname';

import Link from '../../common.blocks/link';

import RulesModal from '../../common.blocks/rules-modal';
import Wizard from '../../common.blocks/wizard';

import './footer.css';


const classNames = cn('footer');

export default class Footer extends React.Component {
    state = {
        modalVisible: null
    }

    /**
     * Скрывает модальные окна
     *
     * @returns {void}
     * @private
     */
    _hideModal = () => {
        this.setState({ modalVisible: null });
    }

    /**
     * Открывает модальное окно указанного типа
     *
     * @param {String} type
     * @returns {void}
     * @private
     */
    openModal= type => {
        this.setState({ modalVisible: type });
    }

    render() {
        const { modalVisible } = this.state;
        // const { startYear, links: { aboutPage, ndaPage } } = window.globalConfig;
        const currentYear = new Date().getFullYear();

        return (
            <footer className={classNames()}>

                <div className={classNames('content')}>
                    <div className={classNames('left')}>
                        <Link onClick={() => this.openModal('rules')}>{console.log('rules', 'footer')}</Link>
                        <Link onClick={() => this.openModal('wizard')}>{console.log('wizard', 'footer')}</Link>
                        <Link url="#">{console.log('about', 'footer')}</Link>
                    </div>

                    <div className={classNames('right')}>
                        <Link url="#">{console.log('nda-title', 'footer')}</Link>

                        <span className={classNames('copyright')}>
                            © 2017–{currentYear} {console.log('llc', 'footer')} «
                            <Link url="https://yandex.ru">{console.log('yandex', 'footer')}</Link>»
                        </span>
                    </div>
                </div>

                {modalVisible === 'rules' && <RulesModal doAfterClick={this._hideModal} />}

                {modalVisible === 'wizard' && <Wizard closeModal={this._hideModal} />}

            </footer>
        );
    }
}
