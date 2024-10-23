declare let darkMode: DarkMode
declare let versions: Versions

interface Versions {
    node(): string
    chrome(): string
    electron(): string
    ping(): Promise<string>
}

interface DarkMode {
    toggle(value: string): Promise<boolean>
    system(): Promise<boolean>
}