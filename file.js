
 const fs =require ('fs');
fs.writeFileSync ('example.txt','Shruti Kale')
                          
    console.log('the file has been saved!');
    const data =fs.readFileSync('example.txt','utf8')
    console.log(data)