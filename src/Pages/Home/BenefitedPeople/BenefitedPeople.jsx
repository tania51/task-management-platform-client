import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { MdDeveloperMode } from "react-icons/md";
import { MdCorporateFare } from "react-icons/md";
import { BsBank } from "react-icons/bs";

const BenefitedPeople = () => {
    return (
        <div className="py-10 md:py-20">
            <div className="font-bold uppercase text-2xl md:text-3xl lg:text-4xl">
                User Who can be benefited
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* developers card */}
                <Card className="mt-6 border p-3">
                    <CardBody>
                    <MdDeveloperMode className="text-2xl text-orange-600 mb-3" />
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Web Developers
                        </Typography>
                        <Typography>
                            Because it&apos;s about motivating the doers. Because I&apos;m here to
                            follow my dreams and inspire others.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <a href="#" className="inline-block">
                            <Button size="sm" variant="text" className="flex items-center gap-2">
                                Learn More
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </Button>
                        </a>
                    </CardFooter>
                </Card>

                {/* corporate professionals card */}
                <Card className="mt-6 border p-3">
                    <CardBody>
                    <MdCorporateFare className="text-3xl text-orange-600 mb-2" />
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                        Corporate Professionals
                        </Typography>
                        <Typography>
                            Because it&apos;s about motivating the doers. Because I&apos;m here to
                            follow my dreams and inspire others.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <a href="#" className="inline-block">
                            <Button size="sm" variant="text" className="flex items-center gap-2">
                                Learn More
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </Button>
                        </a>
                    </CardFooter>
                </Card>

                {/* bankers card */}
                <Card className="mt-6 border p-3">
                    <CardBody>
                    <BsBank className="text-2xl text-orange-600 mb-2" />
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                        Bankers
                        </Typography>
                        <Typography>
                            Because it&apos;s about motivating the doers. Because I&apos;m here to
                            follow my dreams and inspire others.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <a href="#" className="inline-block">
                            <Button size="sm" variant="text" className="flex items-center gap-2">
                                Learn More
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </Button>
                        </a>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default BenefitedPeople;