import { Container, Row, Button, Col } from "react-bootstrap";
import file from "../assets/resume/resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "../style/resume.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  return (
    <div>
      <Container fluid className="resume" id="resume">
        <Container>
          <Col size={12} md={12}>
            <h1>Resume</h1>
            <Row className="resume-file">
              <Document file={file} className="d-flex justify-content-center">
                <Page pageNumber={1} renderTextLayer={false} />
              </Document>
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
