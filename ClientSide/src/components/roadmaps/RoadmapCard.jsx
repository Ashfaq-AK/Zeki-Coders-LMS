import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import API from "../../api";
import { Link } from "react-router-dom";

const RoadmapCard = () => {
  const [roadmaps, setRoadmaps] = useState([]);

  useEffect(() => {
    const fetchRoadmaps = async () => {
      try {
        const response = await API.get("/api/roadmaps");
        console.log(response.data);
        setRoadmaps(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRoadmaps();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full  gap-4 pl-1">
      {roadmaps.map((roadmap, index) => (
        <div
          key={index}
          className="min-h-58 w-full bg-primary text-blue-50 rounded shadow-md shadow-black p-5"
        >
          <div className="text-3xl">{roadmap.emoji}</div>
          <h2 className="text-lg" style={{ color: roadmap.color }}>
            {roadmap.title}
          </h2>
          <p className="text-sm mt-2 line-clamp-2">{roadmap.description}</p>
          <Link
            to={`/roadmaps/${roadmap._id}`}
            className="mt-3 text-sm text-blue-600 flex items-center gap-1.5 b-1"
            style={{ color: roadmap.color }}
          >
            Explore Now <FaArrowRight className="mt-1" />
          </Link>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            {roadmap.tags.map((tag) => (
              <span
                key={tag}
                className="bg-slate-600 py-0.5 px-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoadmapCard;
