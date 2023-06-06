"use strict";
//app.ts file sets up the Express application by importing the necessary modules and defining routes and middleware. The app object is exported from app.ts to be used in server.ts for starting the server.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import express is the default export from express package
//{ Express, Request, Response, NextFunction } destructured Type imports from express package, needed for TypeScript
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
exports.default = app;
