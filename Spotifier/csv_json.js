const csvFilePath='/Users/derrickdieso/Documents/Spotifier/stats/timelines_(3).csv';
const csv=require('csvtojson');
var fs = require('fs');

//initializing data containers
var hot_date = [];
var data_2016 = [];
var data_2017 = [];
var data_2018 = [];

csv()
.fromFile(csvFilePath)
.on('json',(jsonObj)=>{
    //Filters data from before band was on spotify
    if(jsonObj.followers != '0'){
        hot_date.push(jsonObj);
    }
})
.on('done',(error)=>{
    console.log('end')
    //delimits data by year
    for(var i in hot_date){
        if(hot_date[i].date.includes('2015')){
            data_2015.push(hot_date[i]);
        }
        else if(hot_date[i].date.includes('2016')){
            data_2016.push(hot_date[i]);
        }
        else if(hot_date[i].date.includes('2017')){
            data_2017.push(hot_date[i]);
        }
        else if(hot_date[i].date.includes('2018')){
            data_2018.push(hot_date[i]);
        }

    }

    fs.writeFile("2018_data.json", JSON.stringify(data_2018), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 
    //console.log(hot_date[24]);
    //console.log(hot_date[24].date);
    console.log(data_2016);
})

