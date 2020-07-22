function renderPostHeader( user, timestamp ) {
    return `<div class="post-header">
                <a href="${user.link}" class="user-profile-photo">
                    <img src="./img/users/${user.photo}" alt="Users photo">
                </a>
                <div class="user-details">
                    <div class="author">
                        <a href="${user.link}" class="link">${user.name} ${user.lastname}</a>
                    </div>
                    <div class="time">${timestamp} ago</div>
                </div>
                <div class="post-actions">...</div>
            </div>`;
}

export default renderPostHeader;