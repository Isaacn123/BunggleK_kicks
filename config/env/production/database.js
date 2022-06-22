const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);
module.exports = ({ env })=> ({
  connection:{
    client: 'postgres',
    connection: {
        host:config.host,
        port:config.port,
        database:config.database,
        user:config.user,
        password:config.password,
        ssl:{
         rejectUnauthorized:false
        }
    },
    debug:false
  }
});

// module.exports = ({ env }) => ({
//     url:env,
//     proxy:true,
//     app:{
//         key:env.array('APP_KEYS',['fGLVkbjc40shhzuh1BxFyA==','hrV7bDz3uLd1E+vFzgjAzA==','aN8sP58aW9j8Izzc8ZAXKA==','QeKCLltbkcVPqm1ZR8BdJA=='])
//     }
// })