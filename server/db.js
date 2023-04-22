const Pool = require("pg").Pool;

const pool = new Pool({
  user: "dxsyiwyb",
  host: "mahmud.db.elephantsql.com",
  port: "5432",
  password: "nCTiC3YPbSnTPYTMKelWDel6PUG-Er0L",
  database: "dxsyiwyb",
});

// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   port: "5432",
//   password: "mtbsgghirl12",
//   database: "students",
// });

module.exports = pool;
