import { UserController } from "@/controller/User";
import { Router } from "express";

const UserRouter = Router();
/**===============================================================
 *      GET Requests
 * ==============================================================*/
/**
 * GET /api/v1/user
 * @summary This is the summary or description of the endpoint
 * @tags User
 * @return {object} 200 - An array of user info
 */
UserRouter.get("/",UserController.getUser)


/**
 * GET /api/v1/user/auth
 * @summary This is the summary or description of the endpoint
 * @tags User
 * @return {object} 200 - An array of user info
 * @security bearerAuth
 */
UserRouter.get("/auth",UserController.getUser)

/**===============================================================
 *      POST Requests
 * ==============================================================*/


/**===============================================================
 *      PUT Requests
 * ==============================================================*/


/**===============================================================
 *      PATCH Requests
 * ==============================================================*/

/**===============================================================
 *      DELETE Requests
 * ==============================================================*/


export default UserRouter