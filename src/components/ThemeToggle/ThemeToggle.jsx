import { useEffect, useState } from "react";


const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const currentMode = localStorage.getItem('theme');
        setIsDarkMode(currentMode === 'dark');
    }, []);

    const toggleTheme = () => {
        const newMode = isDarkMode ? 'light' : 'dark';
        setIsDarkMode(newMode === 'dark');
        localStorage.setItem('theme', newMode);

        if (newMode === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <button className={`p-2 rounded-md bg-gray-200 ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'text-black'}`} onClick={toggleTheme}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default ThemeToggle;