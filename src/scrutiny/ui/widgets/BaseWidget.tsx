import { MosaicWindow, MosaicWindowProps } from 'react-mosaic-component';
import { JSX, PropsWithChildren } from 'react';
import { TileRenderFuncProps } from '@scrutiny/ui/TileManager/TileRenderer';

export interface WidgetDefinition {
    name: string;
    icon: string;
    translations: {
        [key: string]: Record<string, any>;
        en: Record<string, any>;
    };
}

export type BaseWidgetProps = TileRenderFuncProps<{ [key: string]: any }>;
export interface WidgetModule {
    definition: WidgetDefinition;
    Widget: (arg0: BaseWidgetProps) => JSX.Element;
}

export function BaseWidget(
    props: {
        state: { [key: string]: any };
        setState: { (state: { [key: string]: any }): void };
    } & MosaicWindowProps<string> &
        PropsWithChildren,
) {
    const { children, ...windowProps } = props;

    return (
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        <MosaicWindow {...windowProps}>
            <div style={{ height: '100%', width: '100%', overflow: 'auto' }}>{children}</div>
        </MosaicWindow>
    );
}
