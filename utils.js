const fs = require('fs');

module.exports = {
    readHtml: (url) => {
        return new respHtml((resolve, rejects) => {
            fs.readFile(url, (err, data) => {
                if (!err){
                    resolve(data);
                } else {
                    rejects(err);
                    console.log(err);
                }
            })
        })
    }
}
