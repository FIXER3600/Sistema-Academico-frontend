import React from 'react';
import { Document, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export default function PdfMedia({ arquivo }) {

  return (
    <Document file={arquivo}>

    </Document>
  );
}