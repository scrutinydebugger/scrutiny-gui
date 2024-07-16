import { MosaicBranch } from 'react-mosaic-component';
import React from 'react';

export interface TileRenderFuncProps<
    State = any,
    InitialState = Partial<State>,
> {
    tileId: string;
    path: MosaicBranch[];
    state: InitialState;
    setState: { (newState: State): void };
}

export interface TileRenderFunc<T = any> {
    (props: TileRenderFuncProps<T>): React.JSX.Element;
}

/**
 * Represent a type of tile that can be added to the mosaic.
 */
export interface TileTypeDefinition {
    render: TileRenderFunc<any>;
    initState?: { (tileId: string): any };
}

export interface TileTypeIndex {
    [key: string]: TileTypeDefinition;
}

export function defineNewTileManagerRenderer<State, InitialState = State>(
    render: {
        (props: TileRenderFuncProps<State, InitialState>): React.JSX.Element;
    },
    initState?: { (): InitialState },
): TileTypeDefinition {
    return { render, initState } as TileTypeDefinition;
}
