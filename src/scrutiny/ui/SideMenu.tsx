import React from 'react';
import './styles/side_menu.css';

const ICON_WIDTH: number = 64;
const ICON_HEIGHT: number = 64;

function HorizontalSeparator() {
    return <div className="horizontal_separator" />;
}

interface WidgetMeta {
    icon: string;
}

function SideMenuEntry(props: { meta: WidgetMeta }) {
    const { meta } = props;

    return (
        <div className="widget_draggable_item">
            <img
                src={meta.icon}
                width={`${ICON_WIDTH}px`}
                height={`${ICON_HEIGHT}px`}
                alt="balbalbal todo"
            />
            <span className="widget_draggable_label">THELABELL!!!</span>
        </div>
    );
}

export default function SideMenu(): React.JSX.Element {
    return (
        <div className="side_menu">
            <HorizontalSeparator />
            <SideMenuEntry meta={{ icon: 'assets/img/asd.png' }} />
            <HorizontalSeparator />
        </div>
    );
}
