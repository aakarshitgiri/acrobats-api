const aws = require("aws-sdk");
const bucket = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AAKARSHIT_AWS_ACCESS_KEY
const secretAccessKey = process.env.AAKARSHIT_AWS_SECRET_KEY



exports.fileUpload = async (req, res, next) => {
    try {
        aws.config.setPromisesDependency();
        aws.config.update({
            accessKeyId: accessKeyId,
            secretAccessKey: secretAccessKey,
            region: region,
        });
        const s3 = new aws.S3();
        var params = {
            Bucket: bucket,
            Body: req.file.buffer,
            Key: `file/${req.id + "_" + req.file.originalname}`
        };
        const result = await s3.upload(params).promise();
        const link = result.Location;
        return res.status(201).json({ message: "file successfully uploaded.", publicLink: link });
    }
    catch (err) {
        return res.status(504).json({ error: err });
    }
};
