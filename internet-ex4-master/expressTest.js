var miniExpress = require('./miniExpress'),
    miniHttp = require('./miniHttp'),
    path = require('path');
var app = miniExpress();
app.get ("/:username", miniExpress.static(__dirname+path.sep+"www"));

miniHttp.createServer(app).listen(8888);
//app.listen(8888);
//app.close();

