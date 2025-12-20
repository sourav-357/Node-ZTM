// Import Arwes UI components
import { Footer as ArwesFooter, Paragraph } from "arwes";

// Import Centered component for consistent layout
import Centered from "./Centered";

// Footer component - displays disclaimer at the bottom of the page
const Footer = () => {
  return (
    <ArwesFooter animate>
      <Centered>
        {/* Disclaimer text about educational purposes */}
        <Paragraph style={{ fontSize: 14, margin: "10px 0" }}>
          This is not an official site and is not affiliated with NASA or SpaceX in any way. For educational purposes only.
        </Paragraph>
      </Centered>
    </ArwesFooter>
  );
};

export default Footer;

