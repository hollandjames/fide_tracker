
var t= Date.now();
var fs = require('fs');
    xml2js = require('xml2js');
var allValues;
var parser = new xml2js.Parser();
var october18Json = require('./oct18.json');
var averageRatingObject ={};
allValues = october18Json.playerslist.player;
// fs.readFile(__dirname + '/october18.xml', function(err, data) {
//     parser.parseString(data, function (err, result) {
//    allValues = result;
//     });
//     writeFile();
// });

// function writeFile(){
// fs.writeFile(

//     './oct18.json',

//     JSON.stringify(allValues),

//     function (err) {
//         if (err) {
//             console.error('Crap happens');
//         }
//     }
// );
// }

var allFideRatings=[];


function printFirst(){
    
let totalRating=0;
let counter = 0;

    for(let x =0;x<allValues.length;x++){
        let tmp =[];

tmp.push(parseInt(allValues[x].rating));
tmp.push(parseInt(allValues[x].birthday));
allFideRatings.push(tmp);
        }

for(let z=1918;z<2019;z++){

    for(let y =0;y<allFideRatings.length;y++){

        if(allFideRatings[y][1]==z){

            counter +=1;
            totalRating += allFideRatings[y][0];
        }
}
totalRating =totalRating/counter;

averageRatingObject[z] = totalRating;
totalRating=0;
counter =0;


}

return averageRatingObject;
}