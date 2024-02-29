import { mainRouter } from "@/route.js";
import cors from "@koa/cors";
import Koa from "koa";
import bodyParser from "koa-bodyparser";

const app = new Koa();

app.use(cors()).use(bodyParser()).use(mainRouter.routes());
