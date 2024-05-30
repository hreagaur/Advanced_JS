const extension ="/";
// let contentType;
// switch(extension){
//     case '.css':
//         contentType='text/css';
//         break;
//     case '.js':
//         contentType='text/javascript';
//         break;
//     case '.json':
//         contentType='application/json';
//         break;
//     case '.jpg':
//         contentType='image/jpeg';
//         break;
//     case '.txt':
//         contentType='text/plain';
//         break;
//     default:
//         contentType='text/css';
// }

const contentTypes = {
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.jpg': 'image/jpeg',
    '.txt': 'text/plain',
  };
  
  const contentType = contentTypes[extension] || 'text/css';
  
  console.log(contentType); 

  
  