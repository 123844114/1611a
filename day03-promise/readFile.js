let fs = require('fs')

    // fs.readFile('index.html','utf-8',(err,data)=>{
    //     console.log(err,data)
    // })

    function readFiles(filePath){
        //异步读取文件
      return  new Promise((resolve,reject)=>{
            fs.readFile(filePath,'utf-8',(err,data)=>{
                if(err){
                    return reject(new Error(err))
                }else{
                    return resolve(data)
                }
            })
        })
    }


    // 先读取style.css、再读取file.html;然后替换
   async function concatFile(){
        let style = await readFiles('style.css')
        let first = await readFiles('first.html')
        let newStr=first.replace('{{style}}',style)
        console.log(newStr)
        return newStr
    }
    // concatFile()
    module.exports = concatFile
