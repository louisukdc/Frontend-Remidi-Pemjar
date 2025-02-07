// ServiceCard.js
const ServiceCard = ({ service, onSelect }) => {
    return (
      <div className="p-4 border rounded shadow cursor-pointer" onClick={() => onSelect(service)}>
        <h3 className="text-lg font-semibold">{service.name}</h3>
        <p className="text-gray-600">{service.price}</p>
      </div>
    );
  };
  
  export default ServiceCard;