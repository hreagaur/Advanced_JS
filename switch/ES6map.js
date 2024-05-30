const fileExtensionsToMimeTypes = new Map([
    ['.css', 'text/css'],
    ['.js', 'text/javascript'],
    ['.json', 'application/json'],
    ['.jpg', 'image/jpeg'],
    ['.txt', 'text/plain']
  ]);
  
  const fileExt = '.js';
  const mimeTypeFromMap = fileExtensionsToMimeTypes.get(fileExt) || 'text/css';
  
  console.log(mimeTypeFromMap); // text/javascript
  