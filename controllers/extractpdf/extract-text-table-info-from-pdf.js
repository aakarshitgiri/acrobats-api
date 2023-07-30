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
 * This sample illustrates how to extract Text and Table Information from PDF.
 * <p>
 * Refer to README.md for instructions on how to run the samples & understand output zip file.
 */

exports.extractTableFromPdf = async (req, res, next) => {
    const link = req.body.link;
    try {
        // Initial setup, create credentials instance.
        const credentials = await PDFServicesSdk.Credentials
            .servicePrincipalCredentialsBuilder()
            .withClientId(process.env.PDF_SERVICES_CLIENT_ID)
            .withClientSecret(process.env.PDF_SERVICES_CLIENT_SECRET)
            .build();

        // Create an ExecutionContext using credentials
        const executionContext = await PDFServicesSdk.ExecutionContext.create(credentials);

        // Build extractPDF options
        const options = await new PDFServicesSdk.ExtractPDF.options.ExtractPdfOptions.Builder()
            .addElementsToExtract(PDFServicesSdk.ExtractPDF.options.ExtractElementType.TEXT, PDFServicesSdk.ExtractPDF.options.ExtractElementType.TABLES)
            .build()

        // Create a new operation instance.
        const extractPDFOperation = await PDFServicesSdk.ExtractPDF.Operation.createNew(),
            input = PDFServicesSdk.FileRef.createFromLocalFile(
                link,
                PDFServicesSdk.ExtractPDF.SupportedSourceFormat.pdf
            );

        // Set operation input from a source file.
        await extractPDFOperation.setInput(input);

        // Set options
        await extractPDFOperation.setOptions(options);

        //Generating a file name
        let outputFilePath = await createOutputFilePath();

        await extractPDFOperation.execute(executionContext)
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
            return ("..output/tensech-table-export/extract" + dateString + ".zip");
        }
        return res.json({ message: "PDF extract table from pdf Successfully", success: true });
    } catch (err) {
        console.log('Exception encountered while executing operation', err);
    }
}