import {
    DataStore,
    Mapper,
    Record,
    Schema,
    utils
} from "js-data";
// import { store } from "./store";

// DataStore is mostly recommended for use in the browser

import { HttpAdapter } from "js-data-http";
export const adapter = new HttpAdapter({
    // http: HttpClient,
    basePath: "localhost:8080/api"
});
export const store = new DataStore({});
store.registerAdapter("http", adapter, { default: true });

//// **********  This class definition doest NOT Work! *******/
class User extends Record {
    constructor(props, opts) {
        super(props, opts);
        this._mapper().schema.applyDefaults(this);
    }

    get fullName() {
        return "Hello World";
    }
}

//// **********  This works, When I extend Record this way! *******/
// Uncomment this and comment out above class definition to test.

// const User = Record.extend({
//     init: function(props, opts) {
//         this.super(props, opts);
//         this._mapper().schema.applyDefaults(this);
//       },

//     get fullName() {
//         return "Hello World";
//     }
// });

// userMapper will be used to create instances/records of class User
export const userMapper = store.defineMapper("user", {
    endpoint: "users",
    recordClass: User  // instances created by this mapper will be of class User.
  });
