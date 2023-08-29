// In this file we are inpleminting the raw Node js concpets -------------------------------------------------

const http = require('http');

const fs = require('fs');

const server = http.createServer((req, res)=>{

    // set header content type
  res.setHeader('Content-Type', 'text/html');



//   sending html file back to client
//   fs.readFile('./views/index.html', (err, data)=>{
//     if(err) {
//         console.log(err)
//         res.end()
//     }
//     else {
//         res.write(data)
//         res.end();
//     }
// } )


//   routing to multiple paths

  let path = './views';

  switch(req.url){
    case '/':
        path += '/index.html'
        break;

    case '/about' :
        path += '/about.html'
        break;

    default :
         path += '/404.html'
         break;
  }

    //  reading the file based on the path 
    fs.readFile(path, (err, data)=>{
        if(err)
         {
            console.log(err)
            res.end()
         }
        else 
         {
            res.write(data)
            res.end();

         }
    })

});




server.listen(3000,'localhost', ()=>{
  
    console.log('server is listining');

} )


