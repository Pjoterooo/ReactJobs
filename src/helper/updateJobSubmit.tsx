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
  return;
};

export default updateJobSubmit;
