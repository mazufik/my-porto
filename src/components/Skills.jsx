import { skillsData } from "../data/skillsData";

const Skills = () => {
  return (
    <div className="border border-gray-600 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center">
      <h2 className="text-gray-700 text-xl md:text-4xl font-bold m-4">
        My <br /> Tech <br /> Stack
      </h2>
      {skillsData.map((item) => {
        return (
          <div
            key={item._id}
            className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]"
          >
            <img src={item.imageUrl} alt={item.name} />
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
