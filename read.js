
const path = require('path');
const fs = require('fs');
function resolveDir(dir) {
    return path.join(__dirname, dir);
}

let pathName = resolveDir('src/components');
let dir = []
let disList = []
async function readComponent(){
    return new Promise((resolve) => {
        fs.readdir(pathName,(err, files) => {
            for(let i = 0;i< files.length;i++){
                let filename = files[i];
                let stats = fs.statSync(resolveDir( `src/components/${filename}`));
                if(stats.isDirectory()){
                    disList.push({key:filename});
                }
            }
            resolve(disList)
        })
    })
}
async function f(){
    let str = '123'
    return str
}

f().then(v => console.log(v))

readComponent().then((res) => {
    console.log(disList)
})