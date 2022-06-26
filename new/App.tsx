import React, {useEffect, useState} from 'react';

function App() {
    const [divContent, setDivContent] = useState("Click a button");
    const oldDiv = document.getElementById("old");
    let oldButtons: NodeListOf<HTMLButtonElement>;

    const legacyHandler = () => {
        if (!oldButtons) {
            // Add click event to mootools buttons
            oldButtons = oldDiv.querySelectorAll(":scope > button") as NodeListOf<HTMLButtonElement>;
            oldButtons.forEach((oldButton) => {
                oldButton.addEventListener("click", () => buttonClick(oldButton));
            });
        }
    };

    const buttonClick = (button: HTMLButtonElement) => {
        setDivContent("Button " + button.innerHTML.toString() + " clicked");
    };

    const clearContent = () => {
        setDivContent(null);
        oldDiv.querySelector(":scope > div").innerHTML = null;
    }

    useEffect(() => {
        legacyHandler();
    }, []);

    // Return app output to be rendered by index.tsx
    return (
        <div id="reactComponent">
            <button onClick={clearContent}>Clear</button>
            <div>{divContent}</div>
        </div>
    );
}

export default App;
