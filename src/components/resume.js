import pdf from "./assets/resume.pdf"
import React, { useState } from "react";
//import { Document, Page } from "react-pdf/dist/esm/entry.parcel";
import { Document, Page } from 'react-pdf';

import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  
  return (
<div>
      <Document
        file={pdf}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber}  size="A4" />
      </Document>
    </div>
  );
}
export default Resume;
