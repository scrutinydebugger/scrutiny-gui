import { MosaicNode } from 'react-mosaic-component';
import React, { createContext } from 'react';
import { ReduceTileManagerAction } from './ReduceTileManagerAction';
import { TileTypeIndex } from './TileRenderer';

export interface TileData {
    state: any;
    type: string;
}

export interface SerializableTileManagerData {
    mosaic: MosaicNode<string> | null;
    nextTileId: number;
    tileData: Record<string, TileData>;
}

interface UnserializableTileManagerInterface {
    tileTypeIndex: TileTypeIndex;
    onChange?: { (value: SerializableTileManagerData): void };
}

export type TileManagerContextType = SerializableTileManagerData & UnserializableTileManagerInterface;

export const TileManagerContext = createContext<
    | null
    | [
          TileManagerContextType,
          {
              dispatch: React.Dispatch<ReduceTileManagerAction>;
              serialize(): string;
          },
      ]
>(null);
