/*
 * Copyright 2019 Adobe
 * All Rights Reserved.
 *
 * NOTICE: Adobe permits you to use, modify, and distribute this file in
 * accordance with the terms of the Adobe license agreement accompanying
 * it. If you have received this file from a source other than Adobe,
 * then your use, modification, or distribution of it requires the prior
 * written permission of Adobe.
 */

const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');

/**
 * This sample illustrates how to create a PDF file from a DOCX file.
 * <p>
 * Refer to README.md for instructions on how to run the samples.
 */

exports.docToPdf = async (req, res, next) => {
    const link = req.body.link;
    try {
        // Initial setup, create credentials instance.
        const credentials = await PDFServicesSdk.Credentials
            .servicePrincipalCredentialsBuilder()
            .withClientId(process.env.PDF_SERVICES_CLIENT_ID)
            .withClientSecret(process.env.PDF_SERVICES_CLIENT_SECRET)
            .build();

        // Create an ExecutionContext using credentials and create a new operation instance.
        const executionContext = await PDFServicesSdk.ExecutionContext.create(credentials),
            createPdfOperation = await PDFServicesSdk.CreatePDF.Operation.createNew();

        // Set operation input from a source file.
        const input = await PDFServicesSdk.FileRef.createFromLocalFile(link);
        createPdfOperation.setInput(input);

        //Generating a file name
        let outputFilePath = await createOutputFilePath();

        // Execute the operation and Save the result to the specified location.
        await createPdfOperation.execute(executionContext)
            .then(result => result.saveAsFile(outputFilePath))
            .catch(err => {
                if (err instanceof PDFServicesSdk.Error.ServiceApiError
                    || err instanceof PDFServicesSdk.Error.ServiceUsageError) {
                    console.log('Exception encountered while executing operation', err);
                } else {
                    console.log('Exception encountered while executing operation', err);
                }
            });

        //Generates a string containing a directory structure and file name for the output file.
        async function createOutputFilePath() {
            let date = new Date();
            let dateString = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" +
                ("0" + date.getDate()).slice(-2) + "T" + ("0" + date.getHours()).slice(-2) + "-" +
                ("0" + date.getMinutes()).slice(-2) + "-" + ("0" + date.getSeconds()).slice(-2);
            return ("../output/tensech-docs/tensech-docs" + dateString + ".pdf");
        }
        return res.json({ message: "PDF Created from docs Successfully", success: true });
    } catch (err) {
        console.log('Exception encountered while executing operation', err);
    }
}
