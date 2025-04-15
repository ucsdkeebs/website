import Button from "@/components/Button";
import InputField from "@/components/InputField";
import Link from "next/link";
import BackArrow from "../../../public/assets/icons/back-arrow.svg";
import { EventAPI } from "@/lib/api";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import styles from "./style.module.css";
import { toast } from "react-toastify";
import { PublicProfile } from "@/lib/types/apiResponses";

interface EventData {
  name: string;
  max_attendees: number;
  max_rsvps: number;
  start_date: Date;
  end_date: Date;
  slot_limit: number;
  num_slots: number;
  description: string;
  image_link: string;
}

interface EventFormProps {
  user: PublicProfile;
}

const EventForm = ({ user }: EventFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventData>();

  const router = useRouter();

  const onSubmit = async (data: EventData) => {
    console.log(data);
    try {
      const payload: EventData = {
        name: data.name,
        max_attendees: data.max_attendees,
        max_rsvps: data.max_rsvps,
        start_date: new Date(data.start_date),
        end_date: new Date(data.end_date),
        slot_limit: data.slot_limit,
        num_slots: data.num_slots,
        description: data.description,
        image_link: data.image_link,
      };
      const response = await EventAPI.createEvent(payload);
      toast.success("Event Created!");
      router.push("/admin");
      setTimeout(() => {
        router.reload();
      }, 1500);
    } catch (error: any) {
      console.error(error);
      toast.error(
        error?.response?.data?.message ||
          "❌ Failed to create event. Please try again."
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.popup}>
        <Link href="/admin" className={styles.backArrow}>
          <BackArrow />
        </Link>
        <h2>Create An Event</h2>
        <form className={styles.form}>
          <InputField
            name="name"
            register={register}
            error={errors.name?.message}
            placeholder="Event Name"
            required
          />
          <InputField
            name="max_attendees"
            register={register}
            error={errors.max_attendees?.message}
            placeholder="Max Attendees"
            type="number"
            required
          />
          <InputField
            name="max_rsvps"
            register={register}
            error={errors.max_rsvps?.message}
            placeholder="Max RSVPs"
            type="number"
            required
          />
          <InputField
            name="start_date"
            register={register}
            error={errors.start_date?.message}
            placeholder="Start Date"
            type="datetime-local"
            required
          />
          <InputField
            name="end_date"
            register={register}
            error={errors.end_date?.message}
            placeholder="End Date"
            type="datetime-local"
            required
          />
          <InputField
            name="slot_limit"
            register={register}
            error={errors.slot_limit?.message}
            placeholder="Slot Limit"
            type="number"
            required
          />
          <InputField
            name="num_slots"
            register={register}
            error={errors.num_slots?.message}
            placeholder="Number of Slots"
            type="number"
            required
          />
          <InputField
            name="description"
            register={register}
            error={errors.description?.message}
            placeholder="Description"
            required
          />
          <InputField
            name="image_link"
            register={register}
            error={errors.image_link?.message}
            placeholder="Image Link"
            required
          />
          <Button
            variant="primary"
            onClick={handleSubmit(onSubmit)}
            className={styles.submitButton}
          >
            Create Event
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
