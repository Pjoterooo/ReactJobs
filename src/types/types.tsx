import { FormEvent } from "react";

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

export interface EditJobPageInterface {
  updateJobSubmit: (job: JobsInterface) => Promise<void>;
}

export interface AddJobFormInterface {
  submitForm: (e: FormEvent<HTMLFormElement>) => void;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  salary: string;
  setSalary: React.Dispatch<React.SetStateAction<string>>;
  companyName: string;
  setCompanyName: React.Dispatch<React.SetStateAction<string>>;
  companyDescription: string;
  setCompanyDescription: React.Dispatch<React.SetStateAction<string>>;
  companyEmail: string;
  setCompanyEmail: React.Dispatch<React.SetStateAction<string>>;
  companyPhone: string;
  setCompanyPhone: React.Dispatch<React.SetStateAction<string>>;
}
