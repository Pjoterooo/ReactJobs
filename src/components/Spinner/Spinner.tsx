import ClipLoader from "react-spinners/ClipLoader";
import { SpinnerInterface } from "../../types/types";
const Spinner: React.FC<SpinnerInterface> = ({ loading }) => {
  const override = {
    display: "block",
    margin: "100px auto",
  };
  return (
    <ClipLoader
      loading={loading}
      color="#4338ca"
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;
