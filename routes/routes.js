const express = require("express");
const router = express.Router();

//Add required controllers
const { webToPdf } = require("../controllers/createpdf/create-pdf-from-dynamic-html");
const { docToPdf } = require("../controllers/createpdf/create-pdf-from-docx");
const { htmlToPdf } = require("../controllers/createpdf/create-pdf-from-html-with-inline-css");
const { pptToPdf } = require("../controllers/createpdf/create-pdf-from-pptx");
const { staticHtmlToPdf } = require("../controllers/createpdf/create-pdf-from-static-html");
const { urlToPdf } = require("../controllers/createpdf/create-pdf-from-url");
const { exportPdfToImg } = require("../controllers/exportpdftoimages/export-pdf-to-jpeg");
const { exportPdfToImggs } = require("../controllers/exportpdftoimages/export-pdf-to-jpeg-zip");
const { extractTextFromPdf } = require("../controllers/extractpdf/extract-text-info-from-pdf");
const { extractTableFromPdf } = require("../controllers/extractpdf/extract-text-table-info-from-pdf");
const { docSteamToPdf } = require("../controllers/createpdf/create-pdf-from-docx-stream");

/* const { docOutputSteamToPdf } = require("../controllers/createpdf/create-pdf-from-docx-to-output-stream");
const { parameterisedAutotagPdf } = require("../controllers/autotag/autotag-pdf-parameterised");
const { optionsAutoTagPdf } = require("../controllers/autotag/autotag-pdf-with-options");
const { autoTagPdf } = require("../controllers/autotag/autotag-pdf");
const { combinedPdfWithPageRanges } = require("../controllers/combinepdf/combine-pdf-with-page-ranges");
const { combinePdf } = require("../controllers/combinepdf/combine-pdf");
const { compressedPdfWithOptions } = require("../controllers/compresspdf/compress-pdf-with-options");
const { compressPdf } = require("../controllers/compresspdf/compress-pdf");
const { pdfWithCustomTimeOut } = require("../controllers/customconfigurations/create-pdf-with-custom-timeouts");
const { pdfWithSpecificRegion } = require("../controllers/customconfigurations/export-pdf-with-specified-region");
const { deletePdfPages } = require("../controllers/deletepages/delete-pdf-pages");
const { mergeDocToDocxFragment } = require("../controllers/documentmerge/merge-document-to-docx-fragments");
const { mergeDocToDocx } = require("../controllers/documentmerge/merge-document-to-docx");
const { mergeDocToPdf } = require("../controllers/documentmerge/merge-document-to-pdf");
const { pdfToDocxwithOcr } = require("../controllers/exportpdf/export-pdf-to-docx-with-ocr-options");
const { pdfToDoc } = require("../controllers/exportpdf/export-pdf-to-docx");
const { electronicSealWithAppearanceOption } = require("../controllers/electronicseal/electronic-seal-with-appearance-options");
const { electronicSeal } = require("../controllers/electronicseal/electronic-seal"); */

/* const { createPdf } = require("../controllers/createpdf/create-pdf-from-dynamic-html");
const { createPdf } = require("../controllers/createpdf/create-pdf-from-dynamic-html");
const { createPdf } = require("../controllers/createpdf/create-pdf-from-dynamic-html");
const { createPdf } = require("../controllers/createpdf/create-pdf-from-dynamic-html");
const { createPdf } = require("../controllers/createpdf/create-pdf-from-dynamic-html");
const { createPdf } = require("../controllers/createpdf/create-pdf-from-dynamic-html");
const { createPdf } = require("../controllers/createpdf/create-pdf-from-dynamic-html");
const { createPdf } = require("../controllers/createpdf/create-pdf-from-dynamic-html");
const { createPdf } = require("../controllers/createpdf/create-pdf-from-dynamic-html");
const { createPdf } = require("../controllers/createpdf/create-pdf-from-dynamic-html");
const { createPdf } = require("../controllers/createpdf/create-pdf-from-dynamic-html");
const { createPdf } = require("../controllers/createpdf/create-pdf-from-dynamic-html");
const { createPdf } = require("../controllers/createpdf/create-pdf-from-dynamic-html");
const { createPdf } = require("../controllers/createpdf/create-pdf-from-dynamic-html");
const { createPdf } = require("../controllers/createpdf/create-pdf-from-dynamic-html"); */

//File Upload
const { fileUpload } = require("../utensils/upload_files");

//Add router
router.get("/api/webToPdf", webToPdf);
router.get("/api/docToPdf", docToPdf);
router.get("/api/htmlToPdf", htmlToPdf);
router.get("/api/pptToPdf", pptToPdf);
router.get("/api/staticHtmlToPdf", staticHtmlToPdf);
router.get("/api/urlToPdf", urlToPdf);
router.get("/api/exportPdfToImg", exportPdfToImg);
router.get("/api/exportPdfToImggs", exportPdfToImggs);
router.get("/api/extractTextFromPdf", extractTextFromPdf);
router.get("/api/extractTableFromPdf", extractTableFromPdf);
router.get("/api/docSteamToPdf", docSteamToPdf);

/* router.get("/api/docOutputSteamToPdf", docOutputSteamToPdf);
router.get("/api/parameterisedAutotagPdf", parameterisedAutotagPdf);
router.get("/api/optionsAutoTagPdf", optionsAutoTagPdf);
router.get("/api/autoTagPdf", autoTagPdf);
router.get("/api/combinedPdfWithPageRanges", combinedPdfWithPageRanges);
router.get("/api/combinePdf", combinePdf);
router.get("/api/compressedPdfWithOptions", compressedPdfWithOptions);
router.get("/api/compressPdf", compressPdf);
router.get("/api/pdfWithCustomTimeOut", pdfWithCustomTimeOut);
router.get("/api/pdfWithSpecificRegion", pdfWithSpecificRegion);
router.get("/api/deletePdfPages", deletePdfPages);
router.get("/api/mergeDocToDocxFragment", mergeDocToDocxFragment);
router.get("/api/mergeDocToDocx", mergeDocToDocx);
router.get("/api/mergeDocToPdf", mergeDocToPdf);
router.get("/api/pdfToDocxwithOcr", pdfToDocxwithOcr);
router.get("/api/electronicSealWithAppearanceOption", electronicSealWithAppearanceOption);
router.get("/api/electronicSeal", electronicSeal); */

/* router.get("/api/webToPdf", webToPdf);
router.get("/api/webToPdf", webToPdf);
router.get("/api/webToPdf", webToPdf);
router.get("/api/pdfToDoc", pdfToDoc);
router.get("/api/webToPdf", webToPdf);
router.get("/api/webToPdf", webToPdf);
router.get("/api/webToPdf", webToPdf);
router.get("/api/webToPdf", webToPdf);
router.get("/api/pdfToDoc", pdfToDoc);
router.get("/api/webToPdf", webToPdf);
router.get("/api/webToPdf", webToPdf);
router.get("/api/webToPdf", webToPdf);
router.get("/api/webToPdf", webToPdf);
router.get("/api/pdfToDoc", pdfToDoc);
router.get("/api/webToPdf", webToPdf);
router.get("/api/webToPdf", webToPdf);
router.get("/api/webToPdf", webToPdf);
router.get("/api/webToPdf", webToPdf); */


//Route for File Upload
router.post("/api/fileUpload", fileUpload);

module.exports = router;