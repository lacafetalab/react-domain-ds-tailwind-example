import routes from "app/routes";

// rutas solo de ejemplo
const catsRoutes = {
  edit: `${routes.cats}/edit`,
  new: `${routes.cats}/new`
};

export default { ...catsRoutes };
