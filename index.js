console.log('Starting...');
if(typeof require !== 'undefined') {
  XLSX = require('xlsx');
  fs = require('fs');
}

var pathFile = 'tiny.xlsb';
// Read workbook
console.log('Reading file... \'' + pathFile + '\'');
var workbook = XLSX.readFile(pathFile);
// Select first sheet
var worksheet = workbook.Sheets[workbook.SheetNames[0]];
console.log('\'' + workbook.SheetNames[0] + '\' sheet will be exported');

var output_file_name = "out.csv";
// Parse to CSV and save file
var stream = XLSX.stream.to_csv(worksheet);
stream.pipe(fs.createWriteStream(output_file_name));

console.log('Created file: \'' + output_file_name + '\'');