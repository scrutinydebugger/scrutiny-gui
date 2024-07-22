import { MosaicWindow, MosaicWindowProps } from 'react-mosaic-component';
import { JSX, PropsWithChildren } from 'react';
import { TileRenderFuncProps } from '../ui/TileManager/TileRenderer';
import { WidgetMeta } from './types';
import { NestedStateStore, useNestedState, UseNestedStateOptions } from '../tools/useNestedState';

export type BaseWidgetProps = TileRenderFuncProps<{ [key: string]: any }>;
export interface WidgetModule {
    meta: WidgetMeta;
    Widget: (arg0: BaseWidgetProps) => JSX.Element;
}

export function BaseWidget(
    props: {
        state: { [key: string]: any };
        setState: { (state: { [key: string]: any }): void };
    } & MosaicWindowProps<string> &
        PropsWithChildren,
) {
    const { state, setState, children, ...windowProps } = props;

    return (
        <NestedStateStore state={state} setState={setState} store="widget">
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <MosaicWindow {...windowProps}>
                <div style={{ height: '100%', width: '100%', overflow: 'auto' }}>{children}</div>
            </MosaicWindow>
        </NestedStateStore>
    );
}

export function useWidgetState<T>(key: string, defaultValue: T, options?: UseNestedStateOptions) {
    return useNestedState('widget', key, defaultValue, options);
}
