'use server'
import { S3Client, PutObjectCommand, S3ServiceException } from "@aws-sdk/client-s3";
import { promises as fs } from 'fs';

export const upload = async () => {
    if (!process.env.R2_region || !process.env.R2_ENDPOINT || !process.env.R2_ACCESS_KEY_ID || !process.env.R2_SECRET_ACCESS_KEY){
        return
    }

    const client = new S3Client({
        region: process.env.R2_region,
        endpoint: process.env.R2_ENDPOINT,
        credentials: {
          accessKeyId: process.env.R2_ACCESS_KEY_ID,
          secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
        },
    });
    const bucketName = 'bintan-project'

    const command = new PutObjectCommand({
        Bucket: bucketName,
        Key: 'testupload',
        Body: await fs.readFile(''),
    })

    try {
        const response = await client.send(command);
        console.log(response);
    } catch (caught) {
        if (
        caught instanceof S3ServiceException &&
        caught.name === "EntityTooLarge"
        ) {
        console.error(
            `Error from S3 while uploading object to ${bucketName}. \
    The object was too large. To upload objects larger than 5GB, use the S3 console (160GB max) \
    or the multipart upload API (5TB max).`,
        );
        } else if (caught instanceof S3ServiceException) {
        console.error(
            `Error from S3 while uploading object to ${bucketName}.  ${caught.name}: ${caught.message}`,
        );
        } else {
        throw caught;
        }
    }
}