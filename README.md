JEKYLL RESPONSIVE image


when adding a new blogs, the code at blogs list needs to be uncommented.

when the new picture gets regenerated it can be commented again and the reference that is now created can be used.
<img src="{{ blog.image | replace: '/images/blogs/', 'assets/resized/400/' }}" alt="{{ blog.title }}" class="fully-contained-image">
