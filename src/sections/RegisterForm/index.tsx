import Button from "@/components/Button";
import InputField from "@/components/InputField";
import Dropdown from "@/components/Dropdown";
import Link from "next/link";
import Image from "next/image";
import Raccoon from "../../../public/assets/sleep_raccoon.png";
import BackArrow from "../../../public/assets/icons/back-arrow.svg";
import majors from "@/lib/constants/majors";
import { UserAPI } from "@/lib/api";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import styles from "./style.module.css";
import { toast } from 'react-toastify';

interface FormData {
  username: string;
  major: string;
  pronouns: string;
  year: string;
}

interface RegisterProps {
  email: string;
  token: string;
}

const genders = ["She/her", "He/him", "They/them", "Other"];
const years = ["First", "Second", "Third", "Fourth", "Fifth+"];

const RegisterForm = ({ email, token }: RegisterProps) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      pronouns: "",
      year: "",
      major: "",
    },
  });

  const router = useRouter();
  const collegeStudent = email.endsWith("ucsd.edu");

  const onSubmit = async (data: FormData) => {
    try {
      const payload = {
        token,
        email,
        username: data.username,
        ucsd_affiliation: collegeStudent,
        major: data.major,
        pronouns: data.pronouns,
        year: data.year,
      };
      const response = await UserAPI.createUser(payload);
      setCookie("USER", response);
      toast.success("Account Created!");
      router.push("/");
      setTimeout(() => {
        router.reload();
      }, 1500);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className={styles.container}>
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
            required
          />
          {errors.pronouns && (
            <span className={styles.error}>{errors.pronouns.message}</span>
          )}
          <Controller
            name="pronouns"
            rules={{ required: "Gender is required" }}
            control={control}
            render={({ field }) => (
              <Dropdown
                name="genderOptions"
                options={genders}
                value={field.value}
                onChange={field.onChange}
                className={styles.dropdown}
                placeholder="Gender"
              />
            )}
          />
          {collegeStudent && (
            <>
              {errors.major && (
                <span className={styles.error}>{errors.major.message}</span>
              )}
              <Controller
                name="major"
                rules={{ required: "Major is required" }}
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
              {errors.year && (
                <span className={styles.error}>{errors.year.message}</span>
              )}
              <Controller
                name="year"
                control={control}
                rules={{ required: "Year is required" }}
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
          <Button
            variant="primary"
            onClick={handleSubmit(onSubmit)}
            className={styles.submitButton}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
