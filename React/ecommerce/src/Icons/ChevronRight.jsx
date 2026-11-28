import * as React from "react";

function ChevronRight(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      height={24}
      width={24}
      {...props}
    >
      <path d="M13.172 12l-4.95-4.95 1.414-1.413L16 12l-6.364 6.364-1.414-1.415 4.95-4.95z" />
    </svg>
  );
}

export default ChevronRight;
