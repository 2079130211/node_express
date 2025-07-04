const PDFDocument = require('pdfkit');
const fs = require('fs');



var index = async(request, response) => {



    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream('example.pdf'));
    doc.fontSize(27).text('This the article for GeeksforGeeks', 100, 100);
    doc.image('download3.jpg', {
        fit: [300, 300],
        align: 'center',
        valign: 'center'
    });
    doc.addPage().fontSize(15).text('Generating PDF with the help of pdfkit', 100, 100);
    doc.scale(0.6).translate(470, -380).path('M 250,75 L 323,301 131,161 369,161 177,301 z')
        .fill('red', 'even-odd').restore();
    doc.addPage().fillColor('blue').text('The link for GeeksforGeeks website', 100, 100).link(100, 100, 160, 27, 'https://www.geeksforgeeks.org/');
    doc.end();

    const data = "helelo";
    response.status(200).json({ data });

}


module.exports = {
    index,
}