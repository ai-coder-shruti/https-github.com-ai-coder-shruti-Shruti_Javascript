const path = require("path");
const fileName = "example.txt";
console.log("Working Directory:", process.cwd());
console.log("Full File Path:", path.join(process.cwd(), fileName));
console.log("File Extension:", path.extname(fileName));




// console.log("Version: " , process.version);//node version
// console.log("Platform: " , process.platfrom);//operating style platform
// console.log("working directory: " , process.cwd());//current working
// console.log("memoryusage: " , process.memoryUsage());//memory usage
// process.exit();
