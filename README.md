## ADMIN Dashboard MERN

<hr>
```ROOT
  |──client
  |    |──node_modules
  |    |──public
  |    |──src
  |    |    └── components
  |    |    └── components
  |──server <---we are here
  |    ├── data
  |    │    └── 
  |    ├── controllers
  |    │    └── clients.js
  |    │    └── general.js
  |    │    └── management.js
  |    │    └── sales.js
  |    ├── models
  |    │    └── todo.js
  |    ├── node_modules
  |    ├── routes
  |    │    └── clients.js
  |    │    └── general.js
  |    │    └── management.js
  |    │    └── sales.js
  |    ├── .env
  |    ├── server.js 
  ├── package-lock.json
  └── package.json
```

```js
// /server/ folder
npm install express body-parser cors dotenv helmet morgan mongoose nodemon
```

```js
//server/index.js

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

/**
 * CONFIGURATION
 */

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/**
 * ROUTES
 */
app.use("/client", clientRoutes);
app.use("/general", generalRoues);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);
```

```json
// /server/package.json
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module", <--- allows us to import modules
}
```

```
<!-- .env -->
MONGO_URL = 'mongodb+srv://wilfred:wilfredadmin@wilfredcluster.rsfdy.mongodb.net/mern-admindashboard-app?retryWrites=true&w=majority'
PORT = 5001

```

```js
// package.json

 "start": "node index.js",
  "dev": "nodemon index.js",

/** NOTE==about node and nodemon ========**/
// the reason we don't use nodemon on start is because we are going to deploy our app in live server we USE node that is why on start it uses NODE

```
