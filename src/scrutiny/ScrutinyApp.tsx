import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { I18nextProvider } from 'react-i18next';
import i18next, { Resource } from 'i18next';

import ScrutinyLayout from './ui/ScrutinyLayout';
import { TileManager } from './ui/TileManager';
import availableTileTypes from './ui/widgets/tileTypes';
import allWidgetModules from './ui/widgets';
import commonEN from './translations/en/common.json';

/* 
Initialize i18next for global translation of the app
*/
const i18nextResources: Resource = {
    en: { common: commonEN },
};

i18next.init({
    interpolation: { escapeValue: false }, // React already does escaping
    lng: 'en',
    resources: i18nextResources,
});

// Glue code for widget translation
// Go fetch the local translation of each widget and add it to the global translation dict.
for (const { definition } of allWidgetModules) {
    for (const lang in definition.translations) {
        if (Object.hasOwn(definition.translations, lang)) {
            if (!Object.hasOwn(i18nextResources, 'lang')) {
                i18nextResources[lang] = {};
            }
            i18nextResources[lang][`widget:${definition.name}`] = definition.translations[lang];
        }
    }
}

// <I18nextProvider> Provides a global context to enable i18n translation everywhere
// <DndProvider> Provides a global context to store dragndrop content so it can be accessed anywhere
// <TileManager> Provides a global context that tells what types of tiles are available in the app. Makes their definition available globally
// <ScrutinyLayout> Is the actual UI

function ScrtutinyApp() {
    return (
        <I18nextProvider i18n={i18next}>
            <DndProvider backend={HTML5Backend} debugMode>
                <TileManager tileTypeIndex={availableTileTypes}>
                    <ScrutinyLayout />
                </TileManager>
            </DndProvider>
        </I18nextProvider>
    );
}

export default ScrtutinyApp;
