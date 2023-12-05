import pkg from 'pg'
const { Client } = pkg

const client = new Client({
  host: 'localhost',
  port: 3900,
  user: 'root',
  password: 'root',
  database: 'project77days',
})

client.connect()

const query = async (query) => {
  const { rows } = await client.query(query)
  return rows
}

export default query
