$(function() {
    var data = [
        {
            id: 1,
            title: 'Time Magazine',
            body: 
            'is a little too long; some scenes leave unnecessary skidmark trails. But the movie still has amiable style and energy to spare. Its fast but never furious',
            author: 'Stephanie Zacharek'
        },
        {
            id: 2,
            title: 'Times (UK)',
            body: 'Its far from perfect film, but a richly entertaining one. with a twist that only devoted petroheads will know is coming.',
            author: 'Ed Potton'
        },
        {
            id: 3,
            title: 'ReelViews',
            body: 'Mangold takes Ford v. Ferrari out of the simple realm of the genre without entirely losing the vibe.',
            author: 'James Berardinelli'
        }
    ];

    var $nav = $('#nav-container');
    var $intro = $('#intro');
    var $posts = $('#post-container');

    function initPosts() {
            // Create elements
        for (let i = 0; i < data.length; i++) {
            var postId = 'post-' + data[i].id,
                $post = $('<section class="post"></section>'),
                $title = $('<h2 class="title"></h2>'),
                $body = $('<blockquote></blockquote>'),
                $author = $('<span class="author"></span>'),
                $navItem = $('<li></li>');

            // Add post data
            $title.text(data[i].title);
            $body.text(data[i].body);
            $author.text(data[i].author);

            // Add nav item data
            $navItem.attr('id', data[i].id);
            $navItem.text(data[i].title);

            // Combine post elements
            $post.attr('id', postId);
            $post.append($title);
            $post.append($body);
            $post.append($author);

            // Add post and nav elements to page
            $posts.append($post);
            $nav.append($navItem);

            // Wire up nav item click handler
            $navItem.on('click', function() {
                var id = $(this).attr('id');
                $posts.children().hide();
                $posts.find('#post-' + id).fadeIn();
            });

            // Hide all posts and show the intro
            $posts.children('.post').hide();
            $intro.fadeIn(1000);
        }
    }

    initPosts();

});

// Utitily Functions
function get(element) {
    return document.getElementById(element);
}

// Application functions
function openModal(){
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');

    modal.classList.add('visible');
    backdrop.classList.add('visible');
}

function closeModal(){
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');

    // clear text
    title.value = '';
    text.value = '';
    
    // Hide modal
    modal.classList.remove('visible');
    backdrop.classList.remove('visible');
}

function saveContent(){
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var content = get('display-content');

    // create content elements
    var newTitle = document.createElement('h2');
    var newTitleText = document.createTextNode(title.value);
    var newContent = document.createElement('p');
    var newContentText = document.createTextNode(text.value);

    // Add elements
    newTitle.appendChild(newTitleText);
    newContent.appendChild(newContentText);
    content.appendChild(newTitle);
    content.appendChild(newContent);

    closeModal();
}

window.addEventListener('load', function(){
    var newButton = get('new-button');
    var cancelButton = get('cancel-button');
    var saveButton = get('save-button');

    newButton.addEventListener('click', openModal);
    cancelButton.addEventListener('click', closeModal);
    saveButton.addEventListener('click', saveContent);
});

