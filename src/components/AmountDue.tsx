import { useState } from "react"
import { DataProps } from "../pages/Checkout"

type AmountDueProps = {
    data: DataProps
}

function AmountDue({ data }: AmountDueProps) {
    const [quantity, setQuantity] = useState<string>('1')

    let subTotal: number = +quantity * data.price
    let taxes: number = subTotal * 7 / 100
    let total: number = subTotal + taxes

    function usd(price: number): string {
        return price.toLocaleString("en-US", { style: "currency", currency: "USD" })
    }

    function handleSelect(event: any) {
        setQuantity(event.target.value)
    }
    return (
        <div className="p-14">
            <div>
                <p className="font-medium opacity-50">Amount due</p>
                <h1 className="text-4xl font-medium">{usd(total)}</h1>
            </div>
            <div className="divide-y divide-neutral-600">
                <div id="item" className="flex py-6 gap-3">
                    <div className="w-32">
                        <img className="rounded-xl" src={data.imageUrl} alt="" />
                    </div>
                    <div className="flex w-full">
                        <div className="flex flex-col">
                            <div className="text-xl font-medium">Product {data.id}</div>
                            <div className="mt-auto">
                                <select className="select select-bordered text-black text-base font-medium" onChange={handleSelect}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                </select>
                            </div>
                        </div>
                        <div className="text-xl font-medium ms-auto">{usd(subTotal)}</div>
                    </div>
                </div>
            </div>
            <div className="border-t border-neutral-600 w-full pt-7">
                <div className="flex justify-between opacity-50">
                    <div className="font-medium">Subtotal</div>
                    <div className="font-medium">{usd(subTotal)}</div>
                </div>
                <div className="flex justify-between opacity-50 mt-7">
                    <div className="font-medium">Shipping</div>
                    <div className="font-medium">$0.00</div>
                </div>
                <div className="flex justify-between opacity-50 mt-7">
                    <div className="font-medium">Taxes</div>
                    <div className="font-medium">{usd(taxes)}</div>
                </div>
            </div>
            <div className="border-t border-neutral-600 w-full pt-7 mt-7">
                <div className="flex justify-between">
                    <div className="text-xl font-medium">Total</div>
                    <div className="text-xl font-medium">{usd(total)}</div>
                </div>
            </div>
        </div>
    )
}

export default AmountDue