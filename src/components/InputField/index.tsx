import { UseFormRegister } from "react-hook-form";
import styles from "./style.module.css";

interface InputFieldProps {
  name: string;
  register: UseFormRegister<any>;
  error?: string;
  placeholder: string;
  required?: boolean;
  type?: React.HTMLInputTypeAttribute;
}

const InputField = ({
  name,
  register,
  error,
  placeholder,
  required = false,
  type = "text",
}: InputFieldProps) => {
  return (
    <div className={styles.inputContainer}>
      <input
        {...register(name, {
          required: required ? `${placeholder} is required` : false,
        })}
        type={type}
        className={styles.input}
        placeholder={placeholder}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default InputField;
