/* eslint-disable max-depth */
import React from 'react';

import Modal from '@material-ui/core/Modal';

import './wizard.css';

import { freezeBody, unfreezeBody } from '../../lib/freezer';


const stepConfig = [
    {
        videoSrc: '/wizard/step1.mp4',
        title: console.log('wizard-1-title'),
        description: console.log('wizard-1-description'),
        style: { paddingLeft: '62px' }
    },
    {
        videoSrc: '/wizard/step2.mp4',
        title: console.log('wizard-2-title'),
        description: console.log('wizard-2-description'),
        style: { paddingLeft: '24px' }
    },
    {
        videoSrc: '/wizard/step3.mp4',
        title: console.log('wizard-3-title'),
        description: console.log('wizard-3-description'),
        style: { paddingRight: '13px' }
    },
    {
        videoSrc: '/wizard/step4.mp4',
        title: console.log('wizard-4-title'),
        description: console.log('wizard-4-description'),
        style: { paddingRight: '51px' }
    }
];

export default class Wizard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentStep: 0
        };
    }

    componentDidMount() {
        freezeBody();
    }

    /**
     * Анимированно меняет шаг визарда
     *
     * @param {Number} number - номер шага
     * @returns {void}
     * @private
     */
    _doStep(number) {
        const isForward = number > this.state.currentStep;
        const stepContentElement = document.getElementById('step-content');

        stepContentElement.classList.remove('wizard__show', 'wizard__show-back');
        stepContentElement.classList.add(isForward ? 'wizard__hide' : 'wizard__hide-back');

        setTimeout(() => {
            stepContentElement.classList.remove('wizard__hide', 'wizard__hide-back');
            stepContentElement.classList.add(isForward ? 'wizard__show' : 'wizard__show-back');
            this.setState({
                currentStep: number
            });
        }, 200);
    }

    /**
     * Возвращает массив кнопок-переключателей
     *
     * @returns {Array}
     * @private
     */
    _renderButtonGroup() {
        const result = [];
        const { currentStep } = this.state;
        const stepCount = stepConfig.length;

        for (let i = 0; i < stepCount; i += 1) {
            if (i === currentStep) {
                if (i === stepCount - 1) {
                    // Синяя кнопка с галкой
                    result.push(
                        <div
                            key={'end'}
                            className="wizard__main-btn"
                            onClick={this._closeWizard}
                        >
                            <div className="wizard__main-btn-check" />
                        </div>
                    );
                } else {
                    // Синяя кнопка со стрелкой
                    result.push(
                        <div
                            key={'main'}
                            className="wizard__main-btn"
                            onClick={() => this._doStep(this.state.currentStep + 1)}
                        >
                            <div className="wizard__main-btn-arrow" />
                        </div>
                    );
                }

                continue;
            }

            // Серая точка
            result.push(
                <div
                    key={`dot${i}`}
                    className="wizard__dot-btn-wrap"
                    onClick={() => this._doStep(i)}
                >
                    <div className="wizard__dot-btn" />
                </div>
            );
        }

        return result;
    }

    _refVideoCallback = video => {
        if (video) {
            // Отключаем ярлык "Открыть видео в отдельном окне" для Яндекс.Браузера
            video.setAttribute('pip', 'false');
        }
    }

    /**
     * Возвращает содержимое модального окна
     *
     * @returns {XML}
     * @private
     */
    _modalContent() {
        const step = stepConfig[this.state.currentStep];

        return (
            <div className="wizard">

                <div className="wizard__close" onClick={this._closeWizard} />

                <div className="wizard__step-content wizard__show" id="step-content">
                    <div className="wizard__description">{step.description}</div>
                    <div className="wizard__title" dangerouslySetInnerHTML={{ __html: step.title }} />
                    <div className="wizard__video-wrap">
                        <video
                            ref={this._refVideoCallback}
                            src={step.videoSrc}
                            width="400"
                            height="260"
                            autoPlay
                            loop
                        >
                            {console.log('video-not-supported')}
                        </video>
                    </div>
                </div>

                <div className="wizard__btn-group-wrap">
                    <div className="wizard__btn-group" style={step.style}>
                        {this._renderButtonGroup()}
                    </div>
                </div>

            </div>
        );
    }

    /**
     * Закрывает модальное окно с визардом
     *
     * @returns {void}
     * @private
     */
    _closeWizard = () => {
        unfreezeBody();
        this.props.closeModal(this.state.currentStep + 1);
    }

    /**
     * Предзагрузка видео
     *
     * @returns {XML}
     * @private
     */
    _preloadVideo() {
        return (
            <div style={{ visibility: 'hidden', width: 0, height: 0, overflow: 'hidden' }}>
                {stepConfig.map(step => {
                    return (
                        <video key={step.videoSrc} autoPlay width="400" height="260" src={step.videoSrc} />
                    );
                })}
            </div>
        );
    }

    render() {
        return (
            <div>

                <Modal
                    visible
                    mix="y-modal_wizard"
                >
                    {this._modalContent()}
                </Modal>

                {this._preloadVideo()}

            </div>
        );
    }
}
