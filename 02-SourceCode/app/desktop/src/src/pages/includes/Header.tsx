/// <reference path="../../utils/declarations/Global.d.ts" />
import React from "react";

function Header() {
    async function toggleMode() {
        const modeSelector = document.getElementById('darkMode') as HTMLSelectElement;

        if (modeSelector) {

            if (modeSelector.value === 'system')
                await darkMode.system()
            else
                await darkMode.toggle(modeSelector.value)
        }
    }

    return (
        <div>
            Header
            <select onChange={() => toggleMode()} name="darkMode" id="darkMode">
                <option value="system">System</option>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
            </select>
        </div>
    );
}

export default Header;
