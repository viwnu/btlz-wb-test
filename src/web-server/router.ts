import { Router } from "express";
import sheetsPreferncesRouter from "./sheets-prefernces/index.js";
import spreadSheetsRouter from "./spreadsheets/index.js";

export default Router().use(sheetsPreferncesRouter).use(spreadSheetsRouter);
