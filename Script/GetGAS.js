const auth = require('../JSONhome/auth.json');
const request = require('request');



const baseExcel = {
    'method': 'GET',
    'url': auth.Gas.Get[0].baseExcel,
    'headers':{}
};


exports.getBaseExcel = function(callback){
    let backValue = new Array;
    request(baseExcel,function(error,response){
        try{
            if (error){
                console.log('getBseExcelError1', error);
                callback(false);
            }else{
                const data = JSON.parse(response.body);
                callback(false);
            }
        }catch(err){
            console.log('getBaseExcelError2', err);
            callback(false);
        }
    });
};