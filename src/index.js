var http = require('http');
var datetime = require('./lib/datetime');

http.createServer(function(req, res) {
    let json = JSON.stringify(req.headers);
    let headers = JSON.parse(json);
    res.writeHead(200, {'Content-Type': 'text/plain'});    
    res.write(json);
    res.write('\n');
    res.write('\n');
    res.write('Navegador: ' + headers['user-agent']);
    res.write('\n');
    res.write('Idioma: ' + headers['accept-language']);
    res.write('\n');
    res.write('Host: ' + headers.host);
    res.write('\n');
    res.write('URL: ' + req.url);
    if (req.url.indexOf('?') > -1) {
        let path = req.url.substring(0, req.url.indexOf('?'));
        let queryString = req.url.substring(req.url.indexOf('?') + 1);
        res.write('\n');
        res.write('Path: ' + path);
        res.write('\n');
        res.write('Query string: ' + queryString);
    }    
    res.write('\n');
    res.write('Method: ' + req.method);
    res.end();
})
.listen(8080);
