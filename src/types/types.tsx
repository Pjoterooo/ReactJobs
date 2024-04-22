export interface JobsInterface {
  id?: string;
  title: string;
  type: string;
  description: string;
  location: string;
  salary: string;
  company: {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
  };
}

export interface JobListingInterface {
  job: JobsInterface;
}

export interface JobListingsInterface {
  isHome: boolean;
}

export interface SpinnerInterface {
  loading: boolean;
}

export interface AddJobPageInterface {
  addJobSubmit: (newJob: JobsInterface) => void;
}

export interface JobPageInterface {
  deleteJob: (id: string | undefined) => Promise<void>;
}
