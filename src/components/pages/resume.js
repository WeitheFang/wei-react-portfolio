import React, { useState } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import file from "../../assets/resume/resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "../../style/resume.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = (event) => {
    event.preventDefault();
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const goToNextPage = (event) => {
    event.preventDefault();
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <div>
      <Container fluid className="resume" id="resume">
        <Container className="resume-container">
          <Col size={12} md={12}>
            <h1>Resume</h1>
            <Row className="resume-file">
              <Document
                file={file}
                className="d-flex justify-content-center"
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} renderTextLayer={false} />
              </Document>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button onClick={goToPrevPage} disabled={pageNumber <= 1}>
                  Prev
                </Button>
                <Button
                  onClick={goToNextPage}
                  disabled={pageNumber >= numPages}
                >
                  Next
                </Button>
              </div>
            </Row>

            <Row
              style={{
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Button
                variant="primary"
                href={file}
                target="_blank"
                style={{ maxWidth: "250px" }}
              >
                Download
              </Button>
            </Row>
          </Col>
        </Container>
      </Container>
    </div>
  );
}

export default Resume;
