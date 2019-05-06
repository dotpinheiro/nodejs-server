module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'docker',
  port: 5432,
  password: 'docker',
  database: 'sequelize_tests',
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
