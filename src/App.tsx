import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import HomeCards from "./components/HomeCards/HomeCards";
import JobListings from "./components/JobListings/JobListings";
import ViewAllJobs from "./components/ViewAllJobs/ViewAllJobs";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </>
  );
}

export default App;
