import { createRoot } from 'react-dom/client';
import ScrutinyApp from '../scrutiny/ScrutinyApp';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<ScrutinyApp />);

/*
Example provided by erb
window.electron.ipcRenderer.once('ipc-example', (arg) => {
    // eslint-disable-next-line no-console
    console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
*/
