import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function HighlightedWord({ text, filter, setFilter }) {
  return (
    <span
      onClick={() =>
        setFilter(
          text?.toLowerCase().includes(filter) ? null : text.toLowerCase()
        )
      }
      className={
        text?.toLowerCase().includes(filter) ? "active span-active" : "span-tag"
      }
    >
      {text}
      {text?.toLowerCase().includes(filter) && (
        <FontAwesomeIcon
          icon={faTimes}
          className="purple"
          style={{ marginLeft: 7, marginRight: 2 }}
        />
      )}
    </span>
  );
}
