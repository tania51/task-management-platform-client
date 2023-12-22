import { useLoaderData } from "react-router-dom";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import Title from "../../components/Shared/Title";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";



const Dashboard = () => {
    const newTask = useLoaderData();
    const [allTask, setAllTask] = useState(newTask);
    const axiosPublic = useAxiosPublic();
    console.log(allTask);

    const deleteHandeler = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/allTasks/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        const filterdTask = newTask.filter(aTask => aTask._id !== id)
                        console.log(filterdTask);
                        setAllTask(filterdTask)
                    })

            }
        });
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-7">
            {/* to-do */}
            <div className="bg-orange-400 h-full p-4">
                <Title subHeading="To-Do"></Title>
                {
                    allTask && allTask.map(aTask => <Card key={aTask._id} className="mt-6 border p-2">
                        <CardBody>
                            <Typography variant="h4" color="blue-gray" className="mb-2">
                                {aTask?.Title}
                            </Typography>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                {aTask?.Priority}
                            </Typography>
                            <Typography>
                                {aTask?.Description}
                            </Typography>
                            <Typography>
                                {aTask?.Deadlines}
                            </Typography>
                        </CardBody>
                        <CardFooter onClick={() => deleteHandeler(aTask._id)} className="pt-0">
                            <Button>Delete</Button>
                        </CardFooter>
                    </Card>)
                }
            </div>

            {/* ongoing */}
            <div className="bg-orange-400 h-screen p-4">
                <Title subHeading="Ongoing"></Title>
            </div>

            {/* completed */}
            <div className="bg-orange-400 h-screen p-4">
                <Title subHeading="Completed"></Title>
            </div>
        </div>
    );
};

export default Dashboard;