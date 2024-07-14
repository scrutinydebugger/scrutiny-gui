import React from 'react';
import StatusBar from './StatusBar';
import SideMenu from './SideMenu';
import Dashboard from './Dashboard';

export default function ScrutinyLayout(): React.JSX.Element {
    return (
        <div className="ScrutinyLayout">
            <SideMenu />
            <Dashboard />
            <StatusBar />
        </div>
    );
}
