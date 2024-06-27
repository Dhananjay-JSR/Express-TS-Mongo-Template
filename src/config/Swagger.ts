import Locals from "@/provider/Locals";
import { Options } from "express-jsdoc-swagger";
import path from "path";
// https://brikev.github.io/express-jsdoc-swagger-docs/#/
export const SwaggerOption: Options=  {
    info : {
        description: "Express Boiler Plate ",
        version: "1.0.0",
        title: "Express Boiler Plate",
        contact : {
            email : "hello@dhananjaay.dev",
            name : "Dhananjay"
        }
    },
    exposeApiDocs: true,
    apiDocsPath: "/api-docs.json",
    swaggerUiOptions: {
        customCss: ".swagger-ui .topbar .topbar-wrapper { visibility: hidden }",
        customSiteTitle: "Express Boiler Plate",
    },
    security: {
        bearerAuth: {
            type: "http",
            scheme: "bearer",
          },
    },
    servers: [
        {
          url: "http://localhost:"+Locals.config().port,
          description: "Development server",
        },
    ],
    baseDir: path.join(process.cwd(),"src","routes"),
    filesPattern: "./**/*.ts",
    swaggerUIPath: "/api-docs",
}