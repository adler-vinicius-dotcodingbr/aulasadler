// libraries
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

// interfaces
interface ToNavigationInterface {
    pathRoute: string,
    redirect: boolean,
}

// main
const ToNavigation: React.FC<ToNavigationInterface> = (props) => {
    // constants
    const { redirect, pathRoute } = props;

    if (!redirect) {
        return null;
    }

    return <Redirect to={pathRoute} />;
};

// prop types
ToNavigation.propTypes = {
    redirect: PropTypes.bool.isRequired,
    pathRoute: PropTypes.string.isRequired,
};

export default ToNavigation;
