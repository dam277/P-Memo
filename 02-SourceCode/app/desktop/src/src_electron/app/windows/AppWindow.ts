import { BrowserWindow } from 'electron'
import path from 'path';

/**
 * Class to create a new window
 */
class AppWindow
{
    private _instance!: BrowserWindow;       // Window property

    /**
     * Get the window object
     */
    public get instance() : BrowserWindow    
    {
        return this._instance;
    }

    /**
     * Set the window object
     * @param {string} url The url to load
     */
    public set instance(i : BrowserWindow) 
    {
        this._instance = i;
    }

    /**
     * Creates a new window 
     * @param {string} url The url to load
     */
    public constructor(url: string = "")
    {
        this._instance = this.createWindow(url);
    }

    /**
     * Creates a new window 
     * @param {string} url The url to load
     * @returns {string} The window created
     */
    private createWindow (url: string = "") : BrowserWindow 
    {
        // Create the browser window.
        const win = new BrowserWindow(
        {
            width: 800,
            height: 600,
            webPreferences: 
            {
                nodeIntegration: true,
                preload: path.join(__dirname, '../../app/preloads/preload.js'),
            }
        })
        
        //load the index.html from a url
        win.loadURL(`file://${__dirname}/../../index.html#/${url}`);
        
        // Open the DevTools.
        /// win.webContents.openDevTools()

        return win;
    }
}

export default AppWindow;