import Button from "@/components/Button";
import InputField from "@/components/InputField";
import Dropdown from "@/components/Dropdown";
import Link from "next/link";
import Image from "next/image";
import Raccoon from "../../../public/assets/sleep_raccoon.png";
import BackArrow from "../../../public/assets/icons/back-arrow.svg";
import majors from "@/lib/constants/majors";
import { useForm, Controller } from "react-hook-form";
import styles from "./style.module.css";

interface FormData {
  username: string;
  major: string;
  gender: string;
  year: string;
}

interface RegisterProps {
  collegeStudent?: boolean;
}

const genders = ["She/her", "He/him", "They/them", "Other"];
const years = ["First", "Second", "Third", "Fourth", "Fifth+"];

export default function Register({ collegeStudent = false }: RegisterProps) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      gender: "",
      year: "",
      major: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <main className={styles.main}>
      <div className={styles.popup}>
        <Link href="/login" className={styles.backArrow}>
          <BackArrow />
        </Link>
        <div className={styles.logoContainer}>
          <Image
            className={styles.logo}
            src={Raccoon}
            alt="Raccoon Logo"
            fill
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
          {collegeStudent && (
            <>
              <Controller
                name="major"
                control={control}
                render={({ field }) => (
                  <Dropdown
                    name="majorOptions"
                    options={majors}
                    value={field.value}
                    onChange={field.onChange}
                    className={styles.dropdown}
                    placeholder="Major"
                  />
                )}
              />
              <Controller
                name="year"
                control={control}
                render={({ field }) => (
                  <Dropdown
                    name="yearOptions"
                    options={years}
                    value={field.value}
                    onChange={field.onChange}
                    className={styles.dropdown}
                    placeholder="Year"
                  />
                )}
              />
            </>
          )}
          <Controller
            name="year"
            control={control}
            render={({ field }) => (
              <Dropdown
                name="yearOptions"
                options={years}
                value={field.value}
                onChange={field.onChange}
                className={styles.dropdown}
                placeholder="Year"
              />
            )}
          />
          <Button variant="primary" href="#" className={styles.submitButton}>
            Sign Up
          </Button>
        </form>
      </div>
    </main>
  );
}
