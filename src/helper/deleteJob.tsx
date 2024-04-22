const deleteJob = async (id: string | undefined) => {
  const res = await fetch(`/api/jobs/${id}`, {
    method: "DELETE",
  });
  return;
};

export default deleteJob;
