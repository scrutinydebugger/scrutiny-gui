import { JSX } from 'react';

export interface WidgetMeta {
    name: string;
    icon: string | JSX.Element;
    translations: {
        [key: string]: Record<string, any>;
        en: Record<string, any>;
    };
}
