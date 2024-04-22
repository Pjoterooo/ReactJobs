import { toast } from "react-toastify";

const deleteJob = async (id: string | undefined) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const res = await fetch(`/api/jobs/${id}`, {
    method: "DELETE",
  });
  if (res.ok) {
    toast.success(`Job deleted successfully`);
  } else {
    toast.error("Job deleted Error");
  }
  return;
};

export default deleteJob;
toast.success(`Job deleted successfully`);
