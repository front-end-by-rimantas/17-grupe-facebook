function renderPhotos( photos ) {
    const maxPhotosPerGallery = 4;
    let HTML = '';
    let extra = '';
    const size = photos.length > maxPhotosPerGallery ? maxPhotosPerGallery : photos.length;
    for ( let i=0; i<size; i++ ) {
        HTML += `<img src="./img/posts/${photos[i]}" alt="User post photo">`;
    }
    if ( photos.length > maxPhotosPerGallery ) {
        extra = `<div class="extra">+${photos.length - maxPhotosPerGallery}</div>`;
    }
    return `<div class="gallery gallery-${size}">
                ${HTML}${extra}
            </div>`;
}

export default renderPhotos;