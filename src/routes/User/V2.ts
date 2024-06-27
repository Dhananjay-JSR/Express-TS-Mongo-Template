


import { UserController } from "@/controller/User";
import { Router } from "express";
// import { UserController } from "../../controllers/User";

const UserRouter = Router();
/**===============================================================
 *      GET Requests
 * ==============================================================*/
UserRouter.get("/",UserController.getUser)

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