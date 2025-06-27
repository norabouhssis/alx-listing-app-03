import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";
import GroundRules from "@/components/booking/GroundRules"; // Make sure this component exists

export default function BookingPage() {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <BookingForm />
          <div className="mt-6">
            <CancellationPolicy />
            <GroundRules />
          </div>
        </div>
        <OrderSummary bookingDetails={bookingDetails} />
      </div>
    </div>
  );
}