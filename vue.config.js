
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

function resolveDir(dir) {
    return path.join(__dirname, dir);
}

let pathName = resolveDir('src/components');

function readComponent(){
    let dirList = []
    return new Promise((resolve) => {
        fs.readdir(pathName,(err, files) => {
            for(let i = 0;i< files.length;i++){
                let filename = files[i];
                let stats = fs.statSync(resolveDir( `src/components/${filename}`));
                if(stats.isDirectory()){
                    dirList.push({key:filename});
                }
            }
            resolve(dirList)
        })
    })
}


module.exports = {
    lintOnSave:false,
    chainWebpack:  config => {
        config.plugin('define').tap(  function (argParams)  {
            console.log(argParams[0])
            readComponent().then((res) =>  argParams[0]['process.env.ALL_PARTIES'] = JSON.stringify(res))
            return argParams
        })
    },
    configureWebpack:  function (config) {
    }
}