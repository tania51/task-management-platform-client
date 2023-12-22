
import { useForm } from 'react-hook-form';
import {
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import Title from '../../../components/Shared/Title';
//   import "./CreateTask.css"

export default function CreateTask() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const axiosPublic = useAxiosPublic();
  const onSubmit = data => {
    console.log(data);

    axiosPublic.post('/createTask', data)
      .then(res => {
        console.log(res.data);
        if(res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })

      // reset();

  }
  console.log(errors);

  return (
    <div>

      <div className="mt-10">
      <Title heading="Create Task"></Title>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Title
          </Typography>
          <Input
            size="lg"
            placeholder="Title"
            {...register("Title", { required: true, })}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Description
          </Typography>
          <Textarea color="red" 
            placeholder="Description"
            {...register("Description", { required: true })}
            label="" />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Deadlines
          </Typography>
          <Input {...register("Deadlines")}
            type="date"
            size="lg"
            placeholder="Deadlines"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />


          <Typography variant="h6" color="blue-gray" className="-mb-3">
          Priority
          </Typography>
          <div className="w-full">
          <div className="w-72">
    </div>
          </div>
          <div className="w-full">
            <select {...register("Priority")}
              name="Priority" className="w-full py-2 px-2 border border-blue-gray-200 rounded-lg"
            >
              <option>Select One</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </div>


          <div
          >

          </div>
        </div>
        <Input type="submit" className="mt-6 cursor-pointer bg-orange-500 text-white rounded"></Input>
      </form>
    </div>
  );
}