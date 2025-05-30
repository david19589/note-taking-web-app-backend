import SwaggerUI from "swagger-ui-express";
import YAML from "yamljs";

const swaggerMiddleware = () => {
  const options = {
    customCss: ".swagger-ui .topbar { display: none }",
    customSiteTitle: "note-taking-web-app",
  };

  const swaggerDocument = YAML.load("./src/config/swagger.yaml");
  return [SwaggerUI.serve, SwaggerUI.setup(swaggerDocument, options)];
};

export default swaggerMiddleware;
