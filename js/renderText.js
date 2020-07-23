function renderText( text ) {
    if ( text.length <= 60 ) {
        return `<p class="big-text">${text}</p>`;
    } else if ( text.length <= 300 ) {
        return `<p>${text}</p>`;
    } else {
        return `<p>${text.substr(0, 300)} see more...</p>`;
    }
}

export default renderText;