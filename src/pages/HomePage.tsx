import Hero from "../components/Hero/Hero";
import HomeCards from "../components/HomeCards/HomeCards";
import JobListings from "../components/JobListings/JobListings";
import ViewAllJobs from "../components/ViewAllJobs/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
