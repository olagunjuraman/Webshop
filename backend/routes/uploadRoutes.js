import express from "express";
import uuid from "uuid";
import dotenv from "dotenv";
import AWS from "aws-sdk";
import { admin, protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

dotenv.config();

const s3 = new AWS.S3({
  accessKeyId: "AKIAWRZABIBWOIORELFD",
  secretAccessKey: "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",
  signatureVersion: "v4",
  endpoint: "s3.eu-west-2.amazonaws.com",
  region: "eu-west-2",
});

AWS.config.update({ signatureVersion: "v4" });

router.get("/", protect, admin, (req, res) => {
  const key = `${req.user._id}/${uuid()}.jpeg`;

  s3.getSignedUrl(
    "putObject",
    {
      Bucket: "my-shop-bucket-430",
      Expires: 100000,
      ContentType: "image/jpeg",
      Key: key,
    },
    (err, url) => res.send({ key, url })
  );
});

export default router;
