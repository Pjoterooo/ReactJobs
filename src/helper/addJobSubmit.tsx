import { toast } from "react-toastify";
import { JobsInterface } from "../types/types";

const addJobSubmit = async (newJob: JobsInterface) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const res = await fetch("/api/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newJob),
  });
  if (res.ok) {
    toast.success("Job added Successfully");
  } else {
    toast.error("Job added Error");
  }
  return;
};

export default addJobSubmit;
