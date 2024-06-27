//Import All Routers Here
import { Router } from "express";
import UserRouterV2 from "./User/V2";
import UserRouterV1 from "./User/V1";
import Logger from "@/provider/Logger";
import { RoutesType } from "@/interface/RoutesType";

const RoutesV1: RoutesType[] = [
  {
    path: "/user",
    router: UserRouterV1,
  },
];

const RoutesV2: RoutesType[] = [
  {
    path: "/user",
    router: UserRouterV2,
  },
];
const router = Router();

RoutesV1.forEach((route) => {
  router.use(`/v1` + route.path, route.router);
});

RoutesV2.forEach((route) => {
  router.use(`/v2` + route.path, route.router);
});

Logger.info("Routes Resgistered Successfully");

export default router;
