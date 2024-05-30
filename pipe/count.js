const wordCount = text => {
    return text.split(/\s+/).filter(word => word !== '').length;
  };
  
  const textProcessingFlow = pipe(
    text => text.toLowerCase(),              
    text => text.replace(/[^\w\s]/g, ''),    
    text => text.trim(),                     
    wordCount                                
  );
  
  const loremIpsumText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
  
  console.log(textProcessingFlow(loremIpsumText)); //   50
  