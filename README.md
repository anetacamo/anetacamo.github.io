FROM ME TO ME. WITH LOVE

JEKYLL RESPONSIVE image

when adding a new blogs - Adding a new picture, the code at includes/blogs list needs to be uncommented.

when the new picture gets regenerated it can be commented again and the reference that is now created can be used.
<img src="{{ blog.image | replace: '/images/blogs/', 'assets/resized/400/' }}" alt="{{ blog.title }}" class="fully-contained-image">

FIND THIS FOLDER -- THIS IS THE RIGHT ONE ANETA
jekyll serve

2.) do stuff
3.) git add .
4.) you can check the origin with git remote -v
5.) git commit -m “nice commit”
6.) git push origin master
