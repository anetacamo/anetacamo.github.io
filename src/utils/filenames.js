export function getFileNames() {
  /* list the event names here */
  function importAll(r) {
    return r.keys().map(r);
  }
  const files = importAll(require.context('../events', false, /\.(md)$/));
  /*removing the ending .idcode.md */
  var filenames = files.map((file) =>
    file.default.substring(0, file.default.indexOf('.'))
  );
  /*removing the url beggining /location/ */
  filenames = filenames.map((file) =>
    file.substring(file.lastIndexOf('/') + 1)
  );
  console.log(filenames);
  return filenames;
}
