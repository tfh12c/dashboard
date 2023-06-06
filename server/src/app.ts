//app.ts file sets up the Express application by importing the necessary modules and defining routes and middleware. The app object is exported from app.ts to be used in server.ts for starting the server.

//import express is the default export from express package
//{ Express, Request, Response, NextFunction } destructured Type imports from express package, needed for TypeScript
import express, { Express, Request, Response, NextFunction } from 'express';

const app: Express = express();

export default app;