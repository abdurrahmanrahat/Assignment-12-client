
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="md:w-3/12 mx-auto text-center my-8">
            <p className="text-[#FFBD00] text-lg font-bold">{subHeading}--</p>
            <h3 className="text-4xl font-extrabold uppercase tracking-wider border-b-2 border-[#FFBD00] py-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;