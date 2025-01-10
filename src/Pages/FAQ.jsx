
const FAQ = () => {
    return (
        <div className="w-11/12 mx-auto">
            <div>
                <h1 className="text-2xl lg:text-5xl text-teal-500 pt-10 pb-5 text-center font-bold">Contact Us</h1>
            </div>
            <div className="mt-10">
                <details className="collapse border-t">
                    <summary className="collapse-title text-xl font-medium">How can I contact customer support?</summary>
                    <div className="collapse-content">
                        <p>You can contact Hotel Master customer support via email, phone our website. We’re available 24/7 to assist you with any booking inquiries or issues</p>
                    </div>
                </details>
                <details className="collapse border-t">
                    <summary className="collapse-title text-xl font-medium">Do I need to provide identification upon check-in?</summary>
                    <div className="collapse-content">
                        <p>Yes, a valid ID (passport, driver’s license, or other government-issued ID) is required upon check-in for verification purposes.</p>
                    </div>
                </details>
                <details className="collapse border-t">
                    <summary className="collapse-title text-xl font-medium">Is breakfast included in my booking?</summary>
                    <div className="collapse-content">
                        <p>Breakfast inclusion depends on the hotel and room package. Please verify the details during the booking process or check the room description on Hotel Master for more information.</p>
                    </div>
                </details>
                <details className="collapse border-t">
                    <summary className="collapse-title text-xl font-medium">How do I know if my reservation is confirmed?</summary>
                    <div className="collapse-content">
                        <p>Once your booking is complete, you’ll show an  success toast aleart. You can also log in to your Hotel Master account to view your reservations.</p>
                    </div>
                </details>
                <details className="collapse border-t">
                    <summary className="collapse-title text-xl font-medium">What if I have a question about my booking or hotel during my stay?</summary>
                    <div className="collapse-content">
                        <p>If you have any questions during your stay, please reach out to the hotel’s front desk directly, or you can contact Hotel Master for assistance through the website.</p>
                    </div>
                </details>
                <details className="collapse border-t">
                    <summary className="collapse-title text-xl font-medium">Do you offer free parking?</summary>
                    <div className="collapse-content">
                        <p>Parking policies vary by hotel. Some hotels offer free parking, while others may charge a fee. Please check the individual hotel’s amenities on Hotel Master to confirm parking availability and pricing.</p>
                    </div>
                </details>
                <details className="collapse border-t">
                    <summary className="collapse-title text-xl font-medium">Can I book a room for someone else?</summary>
                    <div className="collapse-content">
                        <p>Yes, you can book a room for someone else. During the booking process, you can provide their details for the reservation, and they will check in under their name at the hotel.</p>
                    </div>
                </details>
                <details className="collapse border-t">
                    <summary className="collapse-title text-xl font-medium">Is there a minimum age requirement for booking?</summary>
                    <div className="collapse-content">
                        <p>Yes, the minimum age for booking a room through Hotel Master is typically 18 years old. However, age requirements may vary by hotel, so please check the hotel’s policies during your booking.</p>
                    </div>
                </details>
            </div>
        </div>
    );
};

export default FAQ;