import React, { PropsWithChildren, useCallback, useMemo, useReducer } from 'react';
import reduceTileManager from './reduceTileManager';
import { SerializableTileManagerData, TileManagerContext, TileManagerContextType } from './TileManagerContext';
import { TileTypeIndex } from './TileRenderer';

export default function TileManager(
    props: PropsWithChildren & {
        tileTypes: () => TileTypeIndex | [() => TileTypeIndex, any[]];
        value?: SerializableTileManagerData;
        onChange?: { (value: SerializableTileManagerData): void };
    },
): React.JSX.Element {
    const { value, tileTypes, onChange } = props;
    const initialContext: TileManagerContextType = {
        mosaic: null,
        nextTileId: 1,
        tileData: {},
        ...value,
        onChange,
        tileTypes: useMemo(typeof tileTypes === 'function' ? tileTypes : tileTypes[0], typeof tileTypes === 'function' ? [] : tileTypes[1]),
    };

    const [context, dispatch] = useReducer(reduceTileManager, initialContext);

    const serialize = useCallback(() => {
        const { mosaic, nextTileId, tileData } = context;
        return JSON.stringify({ mosaic, nextTileId, tileData });
    }, [context]);
    const { children } = props;
    return <TileManagerContext.Provider value={[context, { dispatch, serialize }]}>{children}</TileManagerContext.Provider>;
}

TileManager.defaultProps = {
    value: null,
    onChange: () => {},
};
