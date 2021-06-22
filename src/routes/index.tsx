// libraries
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// pages=
import ModuleOnePage from '../pages/ModuleOne/ModuleOnePage';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/ModuleOne" component={ModuleOnePage} />
    </Switch>
);

export default Routes;
