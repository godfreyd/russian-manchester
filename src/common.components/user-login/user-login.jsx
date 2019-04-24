import React from 'react';
import PropTypes from 'prop-types';

import Link from '../link';

const UserLogin = ({ login }) => (
    <Link internal type="login" name="user-login" url={`/user/${login}`}>
        {login}
    </Link>
);

UserLogin.propTypes = {
    login: PropTypes.string.isRequired
};

export default UserLogin;
