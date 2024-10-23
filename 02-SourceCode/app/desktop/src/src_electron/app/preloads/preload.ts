import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('versions', 
{
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    ping: () => ipcRenderer.invoke('ping')
})

contextBridge.exposeInMainWorld('darkMode',
{
    toggle: (mode: string) => ipcRenderer.invoke('dark-mode:toggle', { mode: mode }),
    system: () => ipcRenderer.invoke('dark-mode:system')
})