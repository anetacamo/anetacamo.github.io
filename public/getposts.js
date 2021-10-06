const path = require('path');
const fs = require('fs');

const dirPath = path.join(__dirname, '../src/blogs');
let postlist = [];

const getPosts = () => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return console.log('Failed to list contents of directory: ' + err);
    }

    files.forEach((file, i) => {
      let obj = {};
      let post;
      fs.readFile(`${dirPath}/${file}`, 'utf8', (err, contents) => {
        /* only metadata */

        let meta = contents.substring(4);
        let metadata = meta.substring(0, meta.indexOf('---') - 1);

        /* md made into an object */

        let lines = metadata.split('\n');
        lines.forEach(
          (line) => (obj[line.split(': ')[0]] = line.split(': ')[1])
        );

        console.log(obj);
        console.log(i);
        postlist.push(obj);
        if (postlist.length === files.length) {
          let data = JSON.stringify(postlist);
          fs.writeFileSync('src/blogs.json', data);
        }
      });
    });
  });
  return;
};
getPosts();
