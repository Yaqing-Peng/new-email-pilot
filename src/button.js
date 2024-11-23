export function createButton(id, textContent, styles = {}) {
    const button = document.createElement('button');
    button.id = id;
    button.innerText = textContent;

    // Default styles: add spacing and AI-inspired appearance
    const defaultStyles = {
        cursor: 'pointer',
        padding: '5px',
        margin: '5px', 
        fontSize: '12px',
        fontWeight: 'bold',
        color: '#ffffff',
        background: 'linear-gradient(90deg, #8e24aa, #d81b60)', // AI-inspired gradient background
        border: 'none',
        borderRadius: '8px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
        transition: 'all 0.3s ease', // Smooth animation
    };

    // Merge default styles with provided styles
    Object.assign(button.style, defaultStyles, styles);

    // Styles when the mouse hovers over the button
    button.addEventListener('mouseover', () => {
        button.style.background = 'linear-gradient(90deg, #d81b60, #8e24aa)';
        button.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)'; // Enhance shadow
        button.style.transform = 'translateY(-2px)'; // Hover effect
    });

    // Revert styles when the mouse leaves the button
    button.addEventListener('mouseout', () => {
        button.style.background = 'linear-gradient(90deg, #8e24aa, #d81b60)';
        button.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        button.style.transform = 'translateY(0)';
    });

    return button;
}
