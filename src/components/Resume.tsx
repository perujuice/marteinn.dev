import { Container, Row, Button } from "react-bootstrap"
import './Resume.css'
import { AiOutlineDownload } from "react-icons/ai" // Download icon from react-icons

const pdf = `${import.meta.env.BASE_URL}Marteinn_Hjaltason_CV.pdf`

const Resume = () => (
  <div>
    <Container fluid className="resume-section py-5">
      <Row className="mb-4" style={{ justifyContent: "center", position: "relative" }}>
        <Button
          variant="secondary"
          href={pdf}
          target="_blank"
          className="purple-btn"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>
      <Row className="resume my-4" style={{ justifyContent: "center" }}>
        <iframe
          src={pdf}
          width="100%"
          height="800px"
          title="CV"
          style={{ border: "none", maxWidth: 900 }}
        />
      </Row>
      <Row className="mt-4" style={{ justifyContent: "center", position: "relative" }}>
        <Button
          variant="secondary"
          href={pdf}
          target="_blank"
          className="purple-btn"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>
    </Container>
  </div>
)

export default Resume