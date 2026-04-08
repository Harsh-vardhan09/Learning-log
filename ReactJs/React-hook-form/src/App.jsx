import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting },
  } = useForm();

  const onSubmit = async(data) => {
    await new Promise((resolve)=>setTimeout(resolve,5000))
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">first name</label>
          <input
            {...register("firstname", { required: true, minLength: 5 })}
            aria-invalid={errors.firstName ? "true" : "false"}
          />
          {errors.firstName?.type === "required" && (
            <p role="alert">First name is required</p>
          )}
          {errors.firstname && <p>{errors.firstname.message}</p>}
        </div>
        <div>
          <label htmlFor="">middle name</label>
          <input {...register("middlename")} />
        </div>
        <div>
          <label htmlFor="">last name</label>
          <input {...register("lastname")} />
        </div>
        <button type="submit" disabled={isSubmitting}>{isSubmitting?'submitting':'submit'}</button>
      </form>
    </div>
  );
};

export default App;
