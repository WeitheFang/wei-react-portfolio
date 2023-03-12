import { Container, Row, Button } from "react-bootstrap";
import { PDFViewer, Document, Page, Text } from "@react-pdf/renderer";
import file from "../assets/resume/resume.pdf";

function Resume() {
  const ResumeLink =
    "https://drive.google.com/file/d/1D0TrxKSvdE4UHCzh8m8ojn7ErIZwRB7d/view?usp=share_link";

  return (
    <div>
      <Container fluid className="resume-section">
        <Row className="resume">
          <PDFViewer width="100%" height="100%">
            <Page>
              <Text>Resume</Text>
            </Page>
          </PDFViewer>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={ResumeLink}
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
