const jdenticon = require("jdenticon");
const express = require("express");


exports.handler = async function(event, context) {
    // your server-side functionality

    res.setHeader("Content-Type", "image/svg+xml");
    res.send(
        jdenticon.toSvg(req.params.identifier, Number.parseInt(req.params.size, 10))
    );


    return {
        statusCode: 200,
        body: jdenticon.toSvg(req.params.identifier, Number.parseInt(req.params.size, 10))
    }

}