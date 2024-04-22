import { toast } from "react-toastify";
import { JobsInterface } from "../types/types";

const updateJobSubmit = async (job: JobsInterface) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const res = await fetch(`/api/jobs/${job.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  });
  if (res.ok) {
    toast.success("Job updated Successfully");
  } else {
    toast.error("Job updated Error");
  }
  return;
};

export default updateJobSubmit;
