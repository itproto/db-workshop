var nodeq = require("node-q");
nodeq.connect({ host: "localhost", port: 5001 }, function (err, con) {
    if (err) throw err;
    console.log("connected");
    // interact with con like demonstrated below
    /* con.k("select from trades", function (err, res) {
         if (err) throw err;
         console.log("result", res.length); // 6
     });*/

    con.on("upd", function (table, data) {
        console.log(table, data);
    });
});