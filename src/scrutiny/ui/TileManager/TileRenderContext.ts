import { createContext } from 'react';

const TileRenderContext = createContext<{ tileId: null | string }>({
    tileId: null,
});

export default TileRenderContext;
