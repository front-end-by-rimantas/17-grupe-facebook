import renderPost from './renderPost.js';

function renderFeed( data ) {
    const size = data.length;
    for ( let i=0; i<size; i++ ) {
        renderPost( data[i] );
    }

    return;
}

export default renderFeed;