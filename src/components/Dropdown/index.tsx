import DropdownArrow from "../../../public/assets/icons/dropdown-arrow.svg";
import { ReactNode, useEffect, useState } from "react";
import styles from "./style.module.scss";

interface DropdownProps {
  name: string;
  ariaLabel: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
  className?: string;
  placeholder?: string;
}

const Dropdown = ({
  name,
  ariaLabel,
  options,
  value,
  onChange,
  readOnly,
  className,
  placeholder,
}: DropdownProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("click", (event) => {
      if (
        event.target instanceof Element &&
        event.target.closest(`.${styles.dropdownWrapper}`)
      ) {
        return;
      }
      setOpen(false);
    });
  }, [open]);

  const optionButtons: ReactNode[] = options.map((option) => (
    <button
      type="button"
      className={styles.option}
      onClick={(event) => {
        onChange(option);
        setOpen(false);
        event.stopPropagation();
      }}
      key={option}
    >
      {option}
    </button>
  ));

  return (
    <div
      className={`${styles.dropdownWrapper} ${className} ${
        readOnly ? styles.readOnly : ""
      }`}
      onClick={(e) => {
        if (readOnly) {
          return;
        }
        if (e.target instanceof HTMLElement && e.target.tagName === "SELECT") {
          return;
        }
        setOpen(true);
      }}
    >
      <label htmlFor={name}>
        <p>{ariaLabel}</p>
      </label>
      <div className={styles.selector}>
        <select
          name={name}
          id={name}
          value={value}
          onChange={(e) => onChange(e.currentTarget.value)}
          aria-label={ariaLabel}
          disabled={readOnly}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
        <DropdownArrow className={styles.arrow} aria-hidden />
      </div>
      <div className={`${styles.contents} ${open ? "" : styles.closed}`}>
        {optionButtons}
      </div>
    </div>
  );
};

export default Dropdown;
