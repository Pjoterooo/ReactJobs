import { useState } from "react";
import { AddJobPageInterface, JobsInterface } from "../types/types";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AddJobForm from "../components/AddJobForm/AddJobForm";

const AddJobPage: React.FC<AddJobPageInterface> = ({ addJobSubmit }) => {
  const [title, setTitle] = useState<string>("");
  const [type, setType] = useState<string>("Full-Time");
  const [description, setDescription] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [salary, setSalary] = useState<string>("Under $50K");
  const [companyName, setCompanyName] = useState<string>("");
  const [companyDescription, setCompanyDescription] = useState<string>("");
  const [companyEmail, setCompanyEmail] = useState<string>("");
  const [companyPhone, setCompanyPhone] = useState<string>("");

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const newJob: JobsInterface = {
      title: title,
      type: type,
      description: description,
      location: location,
      salary: salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail: companyEmail,
        contactPhone: companyPhone,
      },
    };
    addJobSubmit(newJob);
    toast.success(`Job added successfully`);
    return navigate("/jobs");
  };

  return (
    <AddJobForm
      submitForm={submitForm}
      title={title}
      setTitle={setTitle}
      type={type}
      setType={setType}
      description={description}
      setDescription={setDescription}
      location={location}
      setLocation={setLocation}
      salary={salary}
      setSalary={setSalary}
      companyName={companyName}
      setCompanyName={setCompanyName}
      companyDescription={companyDescription}
      setCompanyDescription={setCompanyDescription}
      companyEmail={companyEmail}
      setCompanyEmail={setCompanyEmail}
      companyPhone={companyPhone}
      setCompanyPhone={setCompanyPhone}
    />
  );
};

export default AddJobPage;
