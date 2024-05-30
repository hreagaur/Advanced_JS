const isPalindrome = str => {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
  };
  
  const textProcessingFlow = pipe(
    text => text.toLowerCase(),
    text => text.replace(/[^\w\s]/g, ''),
    text => text.trim(),
    text => ({ 
      originalText: text,
      isPalindrome: isPalindrome(text)
    })
  );
  
  const pal1 = "taco cat";
  const pal2 = "hrea";
  
  const result1 = textProcessingFlow(pal1);
  const result2 = textProcessingFlow(pal2);
  
  console.log(result1);
  console.log(result2);
  