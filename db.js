const readYamlFile = require('read-yaml-file')


const initOptions = {
    /* initialization options */
    error(err, e) {

        if (e.cn) {
            // this is a connection-related error
            // cn = safe connection details passed into the library:
            //      if password is present, it is masked by #
            console.error(e.cn)
        }

        if (e.query) {
            // query string is available
            if (e.params) {
                // query parameters are available
                console.error(e.params)
            }
        }

        if (e.ctx) {
            // occurred inside a task or transaction
            console.error(e.ctx)
        }
      }
};
const pgp = require('pg-promise')(initOptions);

const { host, port, database, user, password, max } = readYamlFile.sync('application.properties.yaml')
const cn = {
    host: host,
    port: port,
    database: database,
    user: user,
    password: password,
    max: max
};
const db = pgp(cn)

module.exports = db
