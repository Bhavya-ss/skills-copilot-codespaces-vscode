// Create web server
// Load modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('./cors');
const authenticate = require('../authenticate');
const Comment = require('../models/comment');

// Create router
const commentRouter = express.Router();

// Use bodyParser to parse JSON body into JS properties
commentRouter.use(bodyParser.json());

// Set up routes
commentRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors, (req, res, next) => {
  /git add comments.js