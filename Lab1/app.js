// app.js
document.addEventListener('DOMContentLoaded', () => {
    const commentsContainer = document.getElementById('comments-container');
    const commentForm = document.getElementById('comment-form');
    const nameInput = document.getElementById('name-input');
    const commentInput = document.getElementById('comment-input');

    let comments = [];

    // ✅ ปลอดภัยกว่า: ไม่ใช้ innerHTML
    function createCommentElement(name, text) {
        const div = document.createElement('div');

        const strong = document.createElement('strong');
        strong.textContent = name + ': ';

        const span = document.createElement('span');
        span.textContent = text;

        div.appendChild(strong);
        div.appendChild(span);

        return div;
    }

    function displayComments(commentsToDisplay) {
        commentsContainer.innerHTML = '';
        commentsToDisplay.forEach(comment => {
            const element = createCommentElement(comment.name, comment.text);
            commentsContainer.appendChild(element);
        });
    }

    async function fetchComments() {
        const response = await fetch('db.json');
        const data = await response.json();
        comments = data.comments;
        displayComments(comments);
    }

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const newComment = {
            name: nameInput.value.trim(),
            text: commentInput.value.trim()
        };

        if (!newComment.name || !newComment.text) return;

        comments.push(newComment);
        displayComments(comments);

        nameInput.value = '';
        commentInput.value = '';
    });

    fetchComments();
});
