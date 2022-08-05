const today=function printDate(){
    
    const d = new Date();
    return "The date is "+ d.getDate();
}

const month =function printMonth(){
    const d = new Date();
return "The month is " +d.getMonth();
}


const batchIn=function getBatchInfo(){
    const d="Plutonium, W3D5, the topic for today is Nodejs module system"
   return  d

}
module.exports.today=today;
module.exports.month=month;
module.exports.batchIn=batchIn;

