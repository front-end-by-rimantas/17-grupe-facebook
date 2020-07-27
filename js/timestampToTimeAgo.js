function timestampToTimeAgo( timestamp ) {
    const now = Date.now();
    const sec = Math.floor((now - timestamp) / 1000);

    // 0s..15s - Just now
    if ( sec < 16 ) {
        return 'Just now';
    }
    // 16s..59s - [x]s ago
    if ( sec < 60 ) {
        return sec + 's ago';
    }
    // 1m..59m - [x]min ago
    const min = (sec - sec % 60) / 60;
    if ( min < 60 ) {
        return min + 'min ago';
    }
    // 1h..23h - [x]h ago
    const h = (min - min % 60) / 60;
    if ( h < 24 ) {
        return h + 'h ago';
    }
    // 1d..6d - [x]d ago
    const d = (h - h % 24) / 24;
    if ( d < 7 ) {
        return d + 'd ago';
    }
    // 7d..35d - [x]w ago
    const w = (d - d % 7) / 7;
    if ( d < 36 ) {
        return w + 'w ago';
    }
    // 36d..365 - [x]m ago
    const m = (d - d % 31) / 31;
    if ( d < 366 ) {
        return m + 'm ago';
    }
    // 366..infinity - [x]y ago
    return (d - d % 365) / 365 + 'y ago';
}

export default timestampToTimeAgo;