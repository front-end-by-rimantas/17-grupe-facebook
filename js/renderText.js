function renderText( text ) {
    const shortText = 60;
    const mediumText = 300;
    const largeText = 360;

    if ( text.length <= shortText ) {
        return `<p class="big-text">${text}</p>`;
    } else if ( text.length <= largeText ) {
        return `<p>${text}</p>`;
    } else {
        return `<p class="short-text">${text.substr(0, mediumText)}... <span class="read-more">see more</span></p>
                <p class="full-text hidden">${text} <span class="read-less">see less</span></p>`;
    }
}

export default renderText;