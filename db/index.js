const { Pool } = require('pg');

const connectionString = 'postgres://opjkvgvplsoysy:b278d4f3bbb534bce9e9e4a6edcc0dbf64e9333c705e92f2f216d3c2c2dca507@ec2-54-165-36-134.compute-1.amazonaws.com:5432/d16284dokji902'

const pool = new Pool({
	connectionString: connectionString,
});
module.exports = {
	query: (text, params) => pool.query(text, params),
};
