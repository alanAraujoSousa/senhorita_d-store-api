const MySqli = require('mysqli');

let conn = new MySqli({
	host: 'localhost',
	port: 3306,
	user: 'root',
	pass: 'BHU*nji9',
	db: 'senhorita_d_store'
});

let db = conn.emit(false, '');

module.exports = {
	database: db
};
