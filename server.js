var months = {
    '0': 'January',
    '1': 'February',
    '2': 'March',
    '3': 'April',
    '4': 'May',
    '5': 'June',
    '6': 'July',
    '7': 'August',
    '8': 'September',
    '9': 'October',
    '10': 'November',
    '11': 'December',
};
var express = require('express');
var path = require('path');
var app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/:date', function (req, res) {
    var date = req.params.date
    if (isNaN(parseInt(date)) && isNaN(new Date(date))) {
        res.json({ "unix": null, "natural": null });
    } else if (!isNaN(new Date(parseInt(date)))) {
        date = new Date(parseInt(date));
        res.json({
            "unix": date.getTime(),
            "natural": months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()
        });        
    } else {
        date = new Date(date);
        res.json({
            "unix": date.getTime(),
            "natural": months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()
        });
    }
});

app.listen(8080);
