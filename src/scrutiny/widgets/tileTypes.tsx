/*
    Glue code between the widgets and the tile manager.
    Expose to the tile manager the available type of tiles. 
    1 widget = 1 type of tiles.
*/

import widgets from './index';
import { TileTypeIndex, defineNewTileManagerRenderer } from '../ui/TileManager';
import { WidgetModule } from './BaseWidget';

// For each widget, add an entry in a dict that maps widget_name to a TileTypeDefinition, which contains a function to create
// the widget content
const availableTileTypes = widgets.reduce(
    (tileTypes: TileTypeIndex, widgetModule: WidgetModule) => {
        const widgetType = widgetModule.meta.name;
        tileTypes[widgetType] = defineNewTileManagerRenderer(
            // eslint-disable-next-line react/jsx-props-no-spreading
            (props) => <widgetModule.Widget {...props} />,
            () => ({}),
        );
        return tileTypes;
    },
    {} as TileTypeIndex,
);

export default availableTileTypes;
