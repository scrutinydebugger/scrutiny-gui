import React, { PropsWithChildren, useCallback, useReducer } from 'react';
import reduceTileManager from './reduceTileManager';
import { SerializableTileManagerData, TileManagerContext, TileManagerContextType } from './TileManagerContext';
import { TileTypeIndex } from './TileRenderer';

export default function TileManager(
    props: PropsWithChildren & {
        tileTypeIndex: TileTypeIndex;
        value?: SerializableTileManagerData;
        onChange?: { (value: SerializableTileManagerData): void };
    },
): React.JSX.Element {
    const { value, tileTypeIndex, onChange } = props;
    const initialContext: TileManagerContextType = {
        mosaic: null,
        nextTileId: 1,
        tileData: {},
        tileTypeIndex,
        ...value,
        onChange,
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
