import { useTranslation } from 'react-i18next';

import reactIcon from '@scrutiny/assets/img/react-192x192.png';
import useTileManager from '@scrutiny/ui/TileManager/useTileManager';
import { BaseWidget, BaseWidgetProps, WidgetDefinition } from '@scrutiny/ui/widgets/BaseWidget';

export const definition: WidgetDefinition = {
    name: 'debug',
    icon: reactIcon,
    translations: {
        en: {
            display_name: 'Debug',
        },
    },
};

export default function Widget(props: BaseWidgetProps) {
    const { mosaic, _tileData } = useTileManager();
    const { tileId, ...rest } = props;
    const { t } = useTranslation(`widget:${definition.name}`);
    return (
        /* eslint-disable react/jsx-props-no-spreading */
        <BaseWidget {...rest} title={`${t('display_name')} #${tileId}`}>
            <pre>
                Debug Information {'\n'}
                Mosaic:{JSON.stringify(mosaic, null, 4)}
                {'\n'}
                Tile Data:{JSON.stringify(_tileData, null, 4)}
            </pre>
        </BaseWidget>
    );
}
