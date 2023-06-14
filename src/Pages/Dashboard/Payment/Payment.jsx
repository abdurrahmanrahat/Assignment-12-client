import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

// TODO: provide pk
const stripePromise = loadStripe(import.meta.env.VITE_payment_pk);

const Payment = () => {

    return (
        <div>
            <SectionTitle
                subHeading='complete your'
                heading='Course Payment'
            ></SectionTitle>

            <Elements stripe={stripePromise}>
                <CheckOutForm></CheckOutForm>
            </Elements>

        </div>
    );
};

export default Payment;