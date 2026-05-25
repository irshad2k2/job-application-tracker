import { useParams } from "react-router-dom";

const JobPage = () => {
  const id = useParams().id;
  return (
    <div>
      <h1>Job Page job id: {id}</h1>
    </div>
  );
};

export default JobPage;
