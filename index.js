const db = require('./db')

// Read
const getUsers = async() => {
    try {
        const users = await db.any('SELECT id, nick, email, pass FROM users');
        console.log(users)
    } 
    catch(e) {
        // error
        console.error(e)
    }
}

// Insert
const addUser = async(nick, email, pass) => {
    try {
        // db.none or one
        const res = await db.one('INSERT INTO users(nick, email, pass) VALUES($1, $2, $3) RETURNING id', [nick, email, pass])
        console.log(res)
    } catch (error) {
        console.error(error)
    }
}

// Update
const updateNickUser = async(id, nick) => {
    try {
        // db.none or one
        const res = await db.one('UPDATE users SET nick=$2 WHERE id=$1 RETURNING id', [id,nick])
        console.log(res)
    } catch (error) {
        console.error(error)
    }
}

// Delete
const deleteUser = async(id) => {
    try {
        // db.none or one
        const res = await db.one('DELETE FROM users WHERE id=$1 RETURNING id', [id])
        console.log(res)
    } catch (error) {
        console.error(error)
    }
}

//console.log(addUser('celi', 'celi@mail.com', '11'))
//console.log(updateNickUser(2, 'celina'))

// for delete
//addUser('sandy', 'sandy@mail.com', '345')
//console.log(deleteUser(3))

console.log(getUsers())

