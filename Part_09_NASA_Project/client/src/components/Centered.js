// Import withStyles HOC from Arwes for CSS-in-JS styling
import { withStyles } from "arwes";

// Define CSS styles for the centered container
const styles = () => ({
  root: {
    margin: "0 auto",      // Center horizontally
    maxWidth: 800,         // Maximum width for content
  },
  // Responsive styles for mobile devices
  "@media (max-width: 800px)": {
    root: {
      margin: "0 12px",    // Add side margins on small screens
    }
  }
});

// Centered component - provides a centered container with max width
// This ensures content doesn't stretch too wide on large screens
const Centered = props => {
  const {
    classes,      // CSS classes from withStyles
    className,    // Additional className prop
    children,     // Child elements to render
    ...rest       // All other props
  } = props;
  
  return (
    <div className={`${classes.root} ${className}`} {...rest}>
      {children}
    </div>
  );
};

// Export component wrapped with withStyles HOC
export default withStyles(styles)(Centered);

