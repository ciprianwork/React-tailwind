import React, { useState } from "react";
import PropTypes from "prop-types";
import cntl from "cntl";
import collapseIcon from "../../assets/images/collapseIcon.svg";
import expandIcon from "../../assets/images/expandIcon.svg";
const barCN = cntl`
  flex
  justify-between
  items-center
  py-5
  select-none
`;

const titleCN = cntl`
  truncate
  font-semibold
`;

const CollapsibleSection = ({ title, defaultOpen, children, className }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleOpen = () => setIsOpen(!isOpen);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      toggleOpen();
    }
  };

  return (
    <div className={className}>
      <div
        className={barCN}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={onKeyDown}
        role="button"
        tabIndex={0}
      >
        <p className={titleCN}>{title}</p>
        <img
          src={isOpen ? collapseIcon : expandIcon}
          alt={isOpen ? "collapse" : "expand"}
        />
      </div>
      <div className="info-block flex flex-wrap">
        {isOpen && children}
      </div>
    </div>
  );
};

CollapsibleSection.propTypes = {
  /**
   * the text to show on the collapsible section
   */
  title: PropTypes.string,
  /**
   * section should show child on default
   */
  defaultOpen: PropTypes.bool,
  /**
   * the react component to display when section is open
   */
  children: PropTypes.element,
  /**
   * optional className to add to the container
   */
  className: PropTypes.string,
};

CollapsibleSection.defaultProps = {
  title: null,
  defaultOpen: false,
  children: null,
  className: null,
};

export default CollapsibleSection;
