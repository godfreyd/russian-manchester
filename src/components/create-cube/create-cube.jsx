import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import omit from 'lodash/omit';

import slug from '../../lib/slug';

import Button from '../../common.components/button';
import Icon from '../../common.components/icon';
import Modal from '../../common.components/modal';

import CubeForm from '../cube-form';

import i18n from '../i18n';

import './create-cube.css';

const classNames = cn('create-cube');

export default class CreateCube extends React.Component {
    state = {
        form: {
            isVisible: true,
            values: {}
        },
        isModalVisible: false
    }

    fields = [
        { name: 'id', required: true, disabled: true },
        { name: 'name', required: true },
        { name: 'fqdn', required: true },
        { name: 'description' },
        { name: 'officeId', type: 'offices', required: true },
        { name: 'link' },
        { name: 'oebsLocation', required: true }
    ]

    componentWillReceiveProps(nextProps) {
        const { created } = this.props;

        if (!created && nextProps.created) {
            this._hideModal();
        }
    }

    render() {
        const { form, isModalVisible } = this.state;

        return (
            <div>
                <Button cls={classNames('button')} onClick={this._showModal}>
                    {i18n('create-cube', 'cube')}
                </Button>
                {isModalVisible && (
                    <Modal type={classNames()} onOutsideClick={this._hideModal}>
                        <div className={classNames('close')}>
                            <Icon type="close" onClick={this._hideModal} />
                        </div>
                        <CubeForm
                            submitKey="create"
                            cancelKey="create-cancel"
                            fields={this.fields}
                            form={form}
                            title={i18n('create-cube', 'cube')}
                            onCancel={this._hideModal}
                            onChange={this._onInputChange}
                            onSubmit={this._onSubmit}
                        />
                    </Modal>
                )}
            </div>
        );
    }

    _showModal = () => {
        this.setState({
            isModalVisible: true
        });
    }

    _hideModal = () => {
        this.setState({
            isModalVisible: false,
            form: {
                isVisible: true,
                values: {}
            }
        });
    }

    _onInputChange = (name, value) => {
        const { form } = this.state;

        if (name === 'name') {
            form.values.id = slug(value);
        }

        form.values[name] = value;

        this.setState({ form });
    }

    _onSubmit = () => {
        const { saveCube } = this.props;
        const { form } = this.state;

        const values = this.fields.reduce((acc, { name }) => {
            acc[name] = form.values[name];

            return acc;
        }, {});

        saveCube({
            ...omit(values, 'id'),
            ...globalConfig.createCubeDefaults
        });
    }

    static PropTypes = {
        saveCube: PropTypes.func.isRequired,
        created: PropTypes.bool.isRequired
    }
}
