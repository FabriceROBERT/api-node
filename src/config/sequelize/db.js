const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("duncan", "root", "fabrice", {
  host: "localhost",
  dialect: "mariadb",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Authentification réussie.");
  })
  .catch((error) => {
    console.error(" Erreur : ", error);
  });

module.exports = sequelize;
