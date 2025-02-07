// PaymentForm.js
const PaymentForm = ({ onSubmit }) => {
    return (
      <form className="p-4 border rounded shadow" onSubmit={onSubmit}>
        <h3 className="text-lg font-semibold mb-2">Payment Details</h3>
        <input type="text" placeholder="Card Number" className="w-full p-2 mb-2 border rounded" required />
        <input type="text" placeholder="Expiration Date" className="w-full p-2 mb-2 border rounded" required />
        <input type="text" placeholder="CVV" className="w-full p-2 mb-2 border rounded" required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Pay Now</button>
      </form>
    );
  };
  
  export default PaymentForm;