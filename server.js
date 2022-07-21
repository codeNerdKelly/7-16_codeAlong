console.log('hello world')

const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url ==='/'){
        res.write(`
        <html>
          <head>
            <title>Home</title>
          </head>
          <body>
            <a href = '/' class = 'selected'>Home</a>
            <a href = '/products'>Products</a>
            <a href = '/faqs'>FAQs/a>
            </nav>
           </body>
           </html> 
        `)
    }
    else  if(req.url ==='/products'){
        res.write(`
        <html>
          <head>
            <title>Home</title>
          </head>
          <body>
            <a href = '/' class = 'selected'>Home</a>
            <a href = '/'>Products</a>
            <a href = '/'>FAQs/a>
            </nav>
           </body>
           </html> 
        `)
    }
    res.write('hello world');
    res.end();
});


const port = process.env.PORT || 3000;

server.listen(port, ()=>{
    console.log(`listening on port ${port}`)
});