const fs = require('fs');
const size = fs.statSync('public/Weather_Final (1).png').size;
console.log('Size:', size);
