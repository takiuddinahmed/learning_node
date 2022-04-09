const fs = require('fs');
const path = require('path');

const get = (req,res)=>{
    try {
        const contact_path = path.join(__dirname,'../html/contact.html');
        fs.readFile(contact_path, (error, data) => {
            if (error) {
                console.error(error);
                res.writeHead(500);
                res.write(`<h1>Server error </h1>`);
                res.end();
                return;
            }
            res.write(data);
            res.end();
        });
    } catch (error) {
        console.error(error);
        res.writeHead(500);
        res.write(`<h1>Server error </h1>`);
        res.end();
    }
}

const route = (req,res)=>{
    console.log(req.method);
    switch (req.method) {
        case 'GET':
            get(req,res)
            break;
    
        default:
            res.writeHead(404);
            res.write("Ki ulta palta req pathaiso?")
            res.end();
            break;
    }
}

module.exports = {
    route
}