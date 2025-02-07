// ScheduleCard.js
const ScheduleCard = ({ schedule, onSelect }) => {
    return (
      <div className="p-4 border rounded shadow cursor-pointer" onClick={() => onSelect(schedule)}>
        <h3 className="text-lg font-semibold">{schedule.time}</h3>
        <p className="text-gray-600">{schedule.date}</p>
      </div>
    );
  };
  
  export default ScheduleCard;