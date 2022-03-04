import express from "express";

const router = express.Router();

import {
  createJob,
  updateJob,
  deleteJob,
  getAllJob,
  showState,
} from "../controllers/jobController.js";

router.route("/").post(createJob).get(getAllJob);

router.route("/state").get(showState);

router.route("/:id").delete(deleteJob).patch(updateJob);
