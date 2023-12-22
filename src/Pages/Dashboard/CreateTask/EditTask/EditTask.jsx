import { useLoaderData } from "react-router-dom";

import { useForm } from 'react-hook-form';
import {
    Input,
    Textarea,
    Typography,
} from "@material-tailwind/react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";


const EditTask = () => {
    const singleTask = useLoaderData();
    console.log(singleTask._id);
    const taskId = singleTask._id;
    const { Title, Description, Deadlines, Priority } = singleTask;
    const axiosPublic = useAxiosPublic();

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    

    // const editHandeler = (aTask) => {
    //     console.log(aTask);
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, Change the Status"
    //     }).then(async (result) => {
    //         if (result.isConfirmed) {
    //             const newPet = {
    //                 id: aPet._id,
    //                 adopted: aPet.adopted,
    //             }
    //             console.log(newPet);
    //             const updateRes = await axiosSecure.patch(`/my-added-pets/${aPet._id}`, newPet)
    //             console.log(updateRes.data);
    //             if (updateRes.data.modifiedCount > 0) {
    //                 refetch()
    //                 Swal.fire({
    //                     title: "Updated!",
    //                     text: `Status Updated Successfully.`,
    //                     icon: "success"
    //                 });
    //             }


    //         }
    //     });
    // }

    const onSubmit = (data) => {
        // console.log(data);
        // console.log(taskId);
    
            Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Change the Task Details"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const newTask = {
                    Title: data.Title,
                    Description: data.Description,
                    Deadlines: data.Deadlines,
                    Priority: data.Priority
                }
                console.log(newTask);
                const updateTask = await axiosPublic.patch(`/allTasks/${taskId}`, newTask)
                console.log(updateTask);
                // if (updateTask.data.modifiedCount > 0) {
                //     Swal.fire({
                //         title: "Updated!",
                //         text: `Task Updated Successfully.`,
                //         icon: "success"
                //     });
                // }


            }
        });
    
      }

    return (
        <div>
            <div className="mt-10">
            <div className="font-bold uppercase text-2xl md:text-3xl lg:text-4xl">
                Edit Task
            </div>
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
                        defaultValue={Title}
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
                        defaultValue={Description}
                        label="" />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Deadlines
                    </Typography>
                    <Input {...register("Deadlines")}
                        type="date"
                        size="lg"
                        placeholder="Deadlines"
                        defaultValue={Deadlines}
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

                            defaultValue={Priority}
                            name="Priority" className="w-full py-2 px-2 border border-blue-gray-200 rounded-lg"
                        >
                            <option>Select One</option>
                            <option value="low">Low</option>
                            <option value="moderate">Moderate</option>
                            <option value="high">High</option>
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
};

export default EditTask;