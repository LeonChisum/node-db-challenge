module.exports = {
  client: "sqlite3",
  useNullAsDefault: true,
  connection: {
    filename: "./data/dev.sqlite3"
  },
  migrations: {
    directory: "./data/migrations"
  }
};