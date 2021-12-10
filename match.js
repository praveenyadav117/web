const request = require("request");
const chherio = require("cheerio");

const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary";

request(url,cb);

console.log('before');

function cb(error,html){
    if(error){
        console.log(error);

    }
    else{
        handlehtml(html);
    }
}
function handlehtml(html){
    let settool = cheerio.load(html);
    let arr = settool('.d-flex.match-comment-padder.align-items-center .match-comment-long-text');
    let data = settool(arr[0]).text();
    console.log(data);

}

console.log('after');
