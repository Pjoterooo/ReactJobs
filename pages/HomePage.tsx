import Hero from "../src/components/Hero/Hero";
import HomeCards from "../src/components/HomeCards/HomeCards";
import JobListings from "../src/components/JobListings/JobListings";
import ViewAllJobs from "../src/components/ViewAllJobs/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards/>
      <JobListings/>
      <ViewAllJobs/>
    </>
  );
};

export default HomePage;
