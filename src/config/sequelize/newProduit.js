const Produit = require("./produitModel.js");

exports.createTableProduit = async () => {
  try {
    await Produit.sync({ force: true });
    console.log("Table Produit créée avec succès.");
  } catch (error) {
    console.error("Erreur lors de la création de la table Produit :", error);
  }
};
