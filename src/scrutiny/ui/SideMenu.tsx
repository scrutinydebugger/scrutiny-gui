import React, { useMemo } from 'react';
import { useDrag } from 'react-dnd';
import { MosaicDragType } from 'react-mosaic-component';
import { MosaicDropData } from 'react-mosaic-component/lib/internalTypes';
import { ActionAddNewTile, useTileManager } from '@scrutiny/ui/TileManager';
import { WidgetDefinition } from '@scrutiny/ui/widgets/BaseWidget';
import allWidgetModules from '@scrutiny/ui/widgets';
import { useTranslation } from 'react-i18next';

import './styles/side_menu.css';

const ICON_WIDTH: number = 64;
const ICON_HEIGHT: number = 48;

function HorizontalSeparator() {
    return <div className="horizontal_separator" />;
}

function SideMenuEntry(props: { widgetDefinition: WidgetDefinition }) {
    const { widgetDefinition } = props;
    const { t } = useTranslation(`widget:${widgetDefinition.name}`);
    const { dispatch } = useTileManager();
    const [, drag] = useDrag(
        () => ({
            type: MosaicDragType.WINDOW,
            item: () => {
                const item = { widgetDefinition, mosaicId: 'tileManager' };
                return item;
            },

            end(item, monitor) {
                const dropResult = monitor.getDropResult() as MosaicDropData | null;
                // widget added
                const action: ActionAddNewTile = {
                    action: 'addNewTile',
                    tileType: widgetDefinition.name,
                    position: dropResult?.position ?? 'left',
                    path: dropResult?.path ?? ['first'],
                };
                dispatch(action);
            },
        }),
        [widgetDefinition],
    );

    return (
        <div className="widget_draggable_item" ref={drag}>
            <img src={widgetDefinition.icon} width={`${ICON_WIDTH}px`} height={`${ICON_HEIGHT}px`} alt={t('display_name') ?? 'icon'} />
            <span className="widget_draggable_label">{t('display_name')}</span>
        </div>
    );
}

export default function SideMenu(): React.JSX.Element {
    const entries = useMemo(
        () =>
            allWidgetModules.map(({ definition }) => {
                return (
                    <div key={definition.name}>
                        <SideMenuEntry widgetDefinition={definition} />
                        <HorizontalSeparator />
                    </div>
                );
            }),
        [],
    );

    return <div className="side_menu">{entries}</div>;
}
