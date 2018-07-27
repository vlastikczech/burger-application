import React from 'react'

import Aux from '../..//hoc/_Aux';
import classes from './Layout.css'
import Toolbart from '../Navigation/Toolbar/Toolbar'

const layout = (props) => (
    <Aux>
        <Toolbart/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;