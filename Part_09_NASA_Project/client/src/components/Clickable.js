// Import withSounds HOC from Arwes to access sound effects
import { withSounds } from "arwes";

// Clickable component - wraps children and adds click sound effect
// This component enhances any clickable element with audio feedback
const Clickable = props => {
  const {
    children,     // Child elements to render
    sounds,       // Sound effects object from withSounds HOC
    onClick,      // Optional onClick handler from parent
    ...rest       // All other props (style, className, etc.)
  } = props;

  // Enhanced click handler that plays sound before calling parent's onClick
  const clickWithSound = (e) => {
    // Play click sound if available
    sounds.click && sounds.click.play();
    // Call parent's onClick handler if provided
    onClick && onClick(e);
  };

  return (
    <span {...rest} onClick={clickWithSound}>
      {children}
    </span>
  );
};

// Export component wrapped with withSounds HOC
// This provides the sounds prop to the component
export default withSounds()(Clickable);

