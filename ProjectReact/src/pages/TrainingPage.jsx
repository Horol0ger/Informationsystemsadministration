import React, { useEffect, useState } from "react";
import TrainingItem from "../components/TrainingItem";
import axios from "axios";

const TrainingPage = () => {
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    fetchTrainings();
  }, []);

  const fetchTrainings = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/program/getu`
      );
      setTrainings(response.data);
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };
  return (
    <div>
      <h1>Групповые тренировки: </h1>
      {trainings.map((training) => (
        <TrainingItem
          key={training.id}
          id={training.id}
          name={training.name}
          surname={training.surname}
          email={training.title}
          certificate_002={training.capacity}
          date_of_birth={training.memberCount}
          password={training.date}
          ammo_score={training.beg}
          role={training.ending}
        />
      ))}
    </div>
  );
};

export default TrainingPage;
