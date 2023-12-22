

const Title = ({ heading, subHeading }) => {
    return (
        <div>
            <div className="font-bold uppercase text-2xl md:text-3xl lg:text-4xl">
                {heading}
            </div>
            <div className="font-bold uppercase text-md md:text-3xl lg:text-4xl mb-2">
                <span>{subHeading}</span>
            </div>
            <hr />
        </div>
    );
};

export default Title;