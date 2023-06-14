import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { AuthContext } from "../../../Provider/AuthProvider";



const CheckOutForm = () => {
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    const { user } = useContext(AuthContext);

    // stripe comes from a hook that made by react-stripe company
    const stripe = useStripe();

    const elements = useElements();

    const location = useLocation();
    // console.log(location);

    // Check if location.state exists before accessing it
    const data = location.state ? location.state : 132;
    const price = parseFloat(data.toFixed(2));
    // console.log(price);

    // call backed for posting
    useEffect(() => {
        axios.post('https://assignment-12-server-lyart-xi.vercel.app/create-payment-intent', { price })
            .then(res => {
                // console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
    }, [price])


    // handle for pay button
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            // console.log('Error:', error);
            setCardError(error.message)
        } else {
            setCardError('');
            // console.log('Payment Method:', paymentMethod);
        }

        setProcessing(true);

        // code from stripe confirm payment method
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'Unknown',
                        name: user?.displayName || 'Anonymous User'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        setProcessing(false);
        console.log(paymentIntent);
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // TODO: next steps
        }

    }

    return (
        <>
            <form className="md:w-1/2 mx-4 md:mx-auto my-20" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="flex items-center justify-center my-10">
                    <button className="btn text-lg px-5 bg-[#FFBD00] hover:bg-[#0E0C1A] text-black hover:text-white" type="submit" disabled={!stripe || !clientSecret || processing}>
                        Pay
                    </button>
                </div>
            </form>
            {
                cardError && <p className="text-red-600 text-2xl font-semibold text-center">{cardError}</p>
            }
            {
                transactionId && <p className="text-green-600 text-2xl font-semibold text-center">Payment successfully proceed with transactionId: {transactionId}</p>
            }
        </>
    );
};

export default CheckOutForm;