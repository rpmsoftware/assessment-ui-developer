import React, {useEffect, useState} from 'react';

function App() {
    const [divContent, setDivContent] = useState("Click a button");
    let oldButtons: NodeList;

    const legacyHandler = () => {
        console.log("legacyHandler");
        if (!oldButtons) {
            // Add click event to legacy mootools buttons
            oldButtons = document.querySelectorAll("#old > button");
            oldButtons.forEach((oldButton: HTMLButtonElement) => {
                console.log("Add click event to button " + oldButton.innerHTML.toString());
                oldButton.addEventListener("click", () => buttonClick(oldButton));
            });
        }
    };

    const buttonClick = (button: HTMLButtonElement) => {
        console.log("Button " + button.innerHTML.toString() + " clicked");
        setDivContent("Button " + button.innerHTML.toString() + " clicked");
    };

    useEffect(() => {
        legacyHandler();
    }, []);

    // Return app output to be rendered by index.tsx
    return (
        <div>
            {divContent}
        </div>
    );
}

export default App;
