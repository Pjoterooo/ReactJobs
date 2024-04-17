import JobListings from "../components/JobListings/JobListings";

const JobPage = () => {
  return (
    <section className="bg-blue-50 px-4 py-6">
      <JobListings isHome={false}/>
    </section>
  );
};

export default JobPage;
