// const http = require('http');

// const requestListner = function(req,res){
//     res.writeHead(200);
//     res.end("Health Checks")
// }

// const server = http.createServer(requestListner);

// server.
// server.listen(8000);

const express = require("express");
const bodyParser = require("body-parser")
// New app using express module
const app = express();
app.use(bodyParser.urlencoded({
    extended:true
}));

app.get("/", function(req, res) {
    res.status(200).send({
        message: "Health Check",
        status: 200
    });
});
    
app.post("/", function(req, res) {
    var string = req.body.tweet;
    console.log('req', req.body, '========')
    console.log(string,'stringstring req')
    res.status(200).send({
        message: "Sucess",
        data: splitTweet(string),
        status: 200
    });

});
    
app.listen(3000, function(){
    console.log("server is running on port 3000");
})

function splitTweet(string){
    console.log(string, 'stringggg')
    let counter = 0;
    let op = [];
    let str = "";
    let limit = 10;
    for(let i=0; i<string.length; i++){
        if(counter < limit){
            str = str+string[i];
            counter += 1;
            console.log(str,'strrr',string.length == i-1, string.length,i-1);
            if(i == string.length-1){
                op.push(str);
            }
        } else {
            let splitString = str;
            console.log(string[i+1], 'iiiiiiii', i, splitString, string[i+1] === " ")
            if(string[i] == " "){
                console.log("inside sace")
                op.push(str);
                counter = 0;
                str = "";
                i = i+1; // if space is not needed
            } else {
                console.log(str,'str before while loop', str[i+1] ,'stri=1')
                while(string[i+1] != " "){
                    console.log(str,'str in while loop',i)
                    i = i-1;
                    if (str[i+1] == " "){
                    
                    op.push(str.slice(0,i+1));
                    counter = 0;
                    str = "";
                    i = i+1; // if space is not needed
                    break;
                    }
                }
            }
        }
    }
    return op;
}