
import InputLabel from "../components/InputLabel"

function CheckoutForm() {
    return (
        <form className="p-14">
            <div>
                <h1 className="text-xl font-medium">Contact information</h1>
                <div className="mt-6">
                    <InputLabel label="Email" type="email" />
                </div>
            </div>
            <div className="mt-10">
                <h1 className="text-xl font-medium">Payment details</h1>
                <div className="grid grid-cols-4 gap-x-4">
                    <div className="col-span-4 mt-6">
                        <InputLabel label="Card number" type="text" />
                    </div>
                    <div className="col-span-3 mt-6">
                        <InputLabel label="Expiration date (MM/YY)" type="text" />
                    </div>
                    <div className="col-span-1 mt-6">
                        <InputLabel label="CVC" type="text" />
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <h1 className="text-xl font-medium">Shipping address</h1>
                <div className="grid grid-cols-3 gap-x-4">
                    <div className="col-span-3 mt-6">
                        <InputLabel label="Address" type="text" />
                    </div>
                    <div className="col-span-1 mt-6">
                        <InputLabel label="City" type="text" />
                    </div>
                    <div className="col-span-1 mt-6">
                        <InputLabel label="State / Province" type="text" />
                    </div>
                    <div className="col-span-1 mt-6">
                        <InputLabel label="Postal code" type="text" />
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <h1 className="text-xl font-medium">Billing information</h1>
                <div className="mt-6">
                    <div className="flex gap-2 items-center">
                        <input type="checkbox" defaultChecked className="checkbox rounded-none w-4 h-4" />
                        <div className="font-medium">Same as shipping information</div>
                    </div>
                </div>
            </div>
            <div className="flex border-t pt-6 mt-10">
                <button className="btn btn-primary text-xl font-bold w-full">Pay now</button>
            </div>
        </form>
    )
}

export default CheckoutForm