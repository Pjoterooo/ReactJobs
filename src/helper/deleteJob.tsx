const deleteJob = async (id: string | undefined) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const res = await fetch(`/api/jobs/${id}`, {
    method: "DELETE",
  });
  return;
};

export default deleteJob;
