module.exports = {
  dialect: 'postgres',
  host: 'localhost', // 192.168.99.100 / localhost
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
