import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import find from 'lodash/find';

import Button from '../../common.components/button';
import EllipsisString from '../../common.components/ellipsis-string';
import Input from '../../common.components/input';

import ProductInfoRow from '../product-info-row';
import Offices from '../offices';

import i18n from '../i18n';

import './cube-form.css';

const classNames = cn('cube-form');

export default class CubeForm extends React.Component {
    render() {
        const {
            title,
            fields,
            cube = {},
            form,
            submitKey,
            cancelKey,
            onCancel
        } = this.props;

        return (
            <form className={classNames()} onSubmit={this._onSubmit}>
                {title && <h1 className={classNames('title')}>{title}</h1>}
                {fields.map(({ name, required }) => (
                    <ProductInfoRow key={name} infoKey={i18n(name, 'cube')} required={required}>
                        {form.isVisible ?
                            this._renderControl(name) :
                            <EllipsisString>{cube[name]}</EllipsisString>
                        }
                    </ProductInfoRow>
                ))}
                {form.isVisible && (
                    <div className={classNames('controls-container', { center: !onCancel })}>
                        {submitKey && (
                            <Button
                                action
                                cls={classNames('control')}
                                type="submit"
                                width="max"
                                disabled={!this._canSubmit()}
                            >
                                {i18n(submitKey, 'cube')}
                            </Button>
                        )}
                        {onCancel && (
                            <Button
                                cls={classNames('control', { type: 'cancel' })}
                                width="max"
                                onClick={onCancel}
                            >
                                {i18n(cancelKey, 'cube')}
                            </Button>
                        )}
                    </div>
                )}
            </form>
        );
    }

    _renderControl = name => {
        const { fields, form, onChange } = this.props;
        const { type, disabled } = find(fields, { name }) || {};
        const value = form.values[name] || '';

        switch (type) {
            case 'offices':
                return (
                    <Offices
                        value={value}
                        onChange={officeId => onChange(name, officeId)}
                    />
                );
            default:
                return (
                    <Input
                        size="m"
                        name={name}
                        text={value}
                        disabled={disabled}
                        onChange={text => onChange(name, text)}
                    />
                );
        }
    }

    _canSubmit = () => {
        const { fields, form } = this.props;

        return fields
            .filter(field => field.required)
            .every(field => form.values[field.name]);
    }

    _onSubmit = event => {
        event.preventDefault();

        const { onSubmit } = this.props;

        onSubmit();
    }

    static PropTypes = {
        submitKey: PropTypes.string.isRequired,
        cancelKey: PropTypes.string.isRequired,
        cube: PropTypes.object,
        form: PropTypes.object.isRequired,
        fields: PropTypes.array.isRequired,
        onChange: PropTypes.func.isRequired,
        onCancel: PropTypes.func,
        onSubmit: PropTypes.func.isRequired
    }
}
