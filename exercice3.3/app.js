/**
 * Created by antony on 15/07/17.
 */
var app = require("express")();


app.get('/ping', function (req, rep) {
    rep.send('pong');
});

app.listen(process.env.PORT || 8080);