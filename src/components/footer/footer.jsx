import React from 'react';
import { withNaming } from '@bem-react/classname';

import Link from '../../common.components/link';
import RulesModal from '../../common.components/rules-modal';
import Wizard from '../../common.components/wizard';

import i18n from '../i18n';

import './footer.css';

const cn = withNaming({ e: '__', m: '_', v: '_' });
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
        const { startYear, links: { aboutPage, ndaPage } } = globalConfig;
        const currentYear = new Date().getFullYear();

        return (
            <footer className={classNames()}>

                <div className={classNames('content')}>
                    <div className={classNames('left')}>
                        <Link onClick={() => this.openModal('rules')}>{i18n('rules', 'footer')}</Link>
                        <Link onClick={() => this.openModal('wizard')}>{i18n('wizard', 'footer')}</Link>
                        <Link url={aboutPage}>{i18n('about', 'footer')}</Link>
                    </div>

                    <div className={classNames('right')}>
                        <Link url={ndaPage}>{i18n('nda-title', 'footer')}</Link>

                        <span className={classNames('copyright')}>
                            © {startYear}–{currentYear} {i18n('llc', 'footer')} «
                            <Link url="https://yandex.ru">{i18n('yandex', 'footer')}</Link>»
                        </span>
                    </div>
                </div>

                {modalVisible === 'rules' && <RulesModal doAfterClick={this._hideModal} />}

                {modalVisible === 'wizard' && <Wizard closeModal={this._hideModal} />}

            </footer>
        );
    }
}
