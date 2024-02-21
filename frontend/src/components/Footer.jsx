import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>
              Copyright &copy; {currentYear} - By{" "}
              <a
                style={{ paddingLeft: 13, textDecoration: "none" }}
                href="https://www.drhcode.com"
              >
                DRH Code
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
