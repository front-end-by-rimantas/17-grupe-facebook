function renderText( text ) {
    if ( text.length <= 60 ) {
        return `<p class="big-text">${text}</p>`;
    } else if ( text.length <= 300 ) {
        return `<p>${text}</p>`;
    } else {
        return `<p class="short-text">${text.substr(0, 300)}... <span class="read-more">see more</span></p>
                <p class="full-text hidden">${text} <span class="read-less">see less</span></p>`;
    }
}

export default renderText;