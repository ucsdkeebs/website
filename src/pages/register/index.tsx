import Button from "@/components/Button";
import InputField from "@/components/InputField";
import Image from "next/image";
import Raccoon from "../../../public/assets/sleep_raccoon.png";
import { useForm } from "react-hook-form";
import styles from "./style.module.css";

interface FormData {
  username: string;
  major: string;
  gender: string;
  year: string;
}

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <main className={styles.main}>
      <div className={styles.popup}>
        <div className={styles.logoContainer}>
          <Image
            className={styles.logo}
            src={Raccoon}
            alt="Raccoon Logo"
            fill
            objectFit="contain"
          />
        </div>
        <h1>New User</h1>
        <p>Help us get to know you better!</p>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <InputField
            name="username"
            register={register}
            error={errors.username?.message}
            placeholder="Username"
          />
          <InputField
            name="major"
            register={register}
            error={errors.major?.message}
            placeholder="Major"
          />
          <InputField
            name="gender"
            type="select"
            register={register}
            error={errors.gender?.message}
            placeholder="Gender"
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
              { value: "other", label: "Other" },
            ]}
          />
          <InputField
            name="year"
            type="select"
            register={register}
            error={errors.year?.message}
            placeholder="Year"
            options={[
              { value: "first", label: "First" },
              { value: "second", label: "Second" },
              { value: "third", label: "Third" },
              { value: "fourth", label: "Fourth" },
              { value: "fifth", label: "Fifth+" },
            ]}
          />
          <Button variant="primary" href="#" className={styles.submitButton}>
            Submit
          </Button>
        </form>
      </div>
    </main>
  );
}
