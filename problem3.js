const files = [
    "document1.pdf",
    "document2.pdf",
    "image1.png",
    "text1.txt",
    "photo1.jpg",
    "program1.exe",
    "data1.csv",
    "report1.pdf"
  ];
  
  
  function countFileExtensions(files){
      const extensionCounts={};
      
      files.forEach(file =>{
          const extension =file.split('.').pop();
          
          if(extensionCounts[extension]){
              extensionCounts[extension]++;
          }else{
              extensionCounts[extension]=1;
          }
      });
      return extensionCounts;
  }
  console.log(countFileExtensions(files));
