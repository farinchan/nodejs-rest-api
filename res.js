'use strict'

exports.ok = (value, res)=>{
    const data = {
        "status": "Jomblo",
        "value" : value
    }
     res.json(data);
     res.end();
}