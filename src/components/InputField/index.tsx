import { UseFormRegister } from "react-hook-form";
import styles from "./style.module.css";

interface InputFieldProps {
  name: string;
  type?: "text" | "select";
  options?: { value: string; label: string }[];
  register: UseFormRegister<any>;
  error?: string;
  placeholder: string;
}

const InputField = ({
  name,
  type = "text",
  options,
  register,
  error,
  placeholder,
}: InputFieldProps) => {
  return (
    <div className={styles.inputContainer}>
      {type === "select" ? (
        <select {...register(name)} className={styles.select}>
          <option className={styles.placeholder} value="">{placeholder}</option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          {...register(name)}
          className={styles.input}
          placeholder={placeholder}
        />
      )}
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default InputField;
