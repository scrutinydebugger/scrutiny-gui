import React from 'react';
import './styles/status_bar.css';

function StatusBarItem(props: {} & React.PropsWithChildren) {
    const { children } = props;
    return <div className="status_bar_item">{children}</div>;
}

function VerticalSeperator() {
    return <div className="vertical_separator" />;
}

export default function StatusBar(): React.JSX.Element {
    return (
        <div className="status_bar">
            <StatusBarItem>Hello</StatusBarItem>
            <StatusBarItem>Hello1</StatusBarItem>
            <VerticalSeperator />
            <StatusBarItem>Hello2</StatusBarItem>
        </div>
    );
}
