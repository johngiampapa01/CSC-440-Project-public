document.addEventListener('DOMContentLoaded', function() {
    const postList = document.getElementById('post-list');
    const postTitle = document.getElementById('post-title');
    const postContent = document.getElementById('post-content');
    const postTag = document.getElementById('post-tag');
    const submitButton = document.getElementById('submit-post');
    const modal = document.getElementById('modal');
    const addPostButton = document.getElementById('add-post-button');
    const closeButton = document.querySelector('.close');

    addPostButton.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    submitButton.addEventListener('click', function() {
        const title = postTitle.value;
        const content = postContent.value;
        const tag = postTag.value;

        if (title && content && tag) {
            const post = document.createElement('div');
            post.classList.add('post');
            post.dataset.tag = tag; // Set the tag as a data attribute
            post.innerHTML = `
                <h2>${title}</h2>
                <p>${content}</p>
                <p>Tag: ${tag}</p>
            `;
            postList.appendChild(post);

            postTitle.value = '';
            postContent.value = '';
            modal.style.display = 'none';
        }
    });

    // Function to filter posts by tag
    function filterPostsByTag(tag) {
        const posts = document.querySelectorAll('.post');
        posts.forEach(post => {
            if (tag === 'all' || post.dataset.tag === tag) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    }

    // Add event listener for tag selection
    const tagSelector = document.getElementById('tag-selector');
    tagSelector.addEventListener('change', function() {
        const selectedTag = this.value;
        filterPostsByTag(selectedTag);
    });
});
