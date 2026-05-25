import React, { useState } from "react";

interface TaskFormProps {
  addJob: (task: TaskFormState) => void;
}
interface TaskFormState {
  title: string;
}
function JobForm(props: TaskFormProps) {
  const [formState, setFormState] = useState<TaskFormState>({
    title: "",
  });

  const changeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      title: event.target.value,
    });
  };

  const addJob = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.addJob(formState);
    setFormState({
      title: "",
    });
  };

  return (
    <>
      <h1>Job Form</h1>

      <form onSubmit={addJob} action="">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={formState.title}
          onChange={changeTitle}
        />
        <button type="submit">Submit</button>
      </form>

      <h2>Form title : {formState.title}</h2>
    </>
  );
}

export default JobForm;
