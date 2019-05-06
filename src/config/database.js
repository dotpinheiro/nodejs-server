module.exports = {
  dialect: 'postgres',
  host: '192.168.1.101',
  username: 'docker',
  port: 5432,
  password: 'docker',
  database: 'sequelize_tests',
  operatorAliases: false,
  define: {
    timestamps: false
    // underscored: true,
    // underscoredAll: true
  }
}
