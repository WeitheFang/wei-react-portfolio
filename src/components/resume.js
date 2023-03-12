import { Container, Row, Button } from "react-bootstrap";
import file from "../assets/resume/resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Row className="resume">
          <Document file={file} className="d-flex justify-content-center">
            <Page pageNumber={1} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={file}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            Download
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
