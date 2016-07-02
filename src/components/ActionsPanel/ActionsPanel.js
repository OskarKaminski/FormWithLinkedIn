import './actions-panel.scss';
import React from 'react';
import AddPlayer from '../../containers/AddPlayer';
import NextPhase from '../../containers/NextPhase';

export const ActionsPanel = () => {

    return (
        <div className="actions-panel">
            <AddPlayer/>
            <NextPhase/>
        </div>
    );

};