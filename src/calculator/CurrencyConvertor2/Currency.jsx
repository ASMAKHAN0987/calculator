import { useState } from 'react'
import { useMoneyInfo } from './CustomHook/UseMoneyInfo';
import { InputBoxes } from './Component/InputBox2';
const Currency = () => {
    const [amount, setAmount] = useState(2);
    const [converted, setConverted] = useState(0);
    const [to, setTo] = useState("inr");
    const [from, setFrom] = useState("usd");
    const currApi = useMoneyInfo(from);
    const [select, setSelect] = useState("usd");
    const [select2, setSelect2] = useState("inr");
    const convert = () => {
        setConverted(amount * currApi[to]);
    }
    function swap(){
        setFrom(to);
        setTo(from);
        setAmount(converted);
        setConverted(amount);
        setSelect(select2);
        setSelect2(select);}
    const options = Object.keys(currApi)
    return (
        <>
            <div
                className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
                style={{
                    backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
                }}
            >
                <div className="w-full">
                    <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                convert()}}>
                            <div className="w-full mb-1">

                                <InputBoxes label={"From"} amount={amount} onChangeAmount={setAmount} setFrom={setFrom} select={select} onChangeCurrency={(select)=>setSelect(select)} options={options} />
                            </div>
                            <div className="relative w-full h-0.5">
                                <button
                                    type="button"
                                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                    onClick={swap}
                                >
                                    swap
                                </button>
                            </div>
                            <div className="w-full mb-1">
                                <InputBoxes label={"To"} amount={converted} setTo={setTo} select={select2} onChangeCurrency={(select)=>setSelect2(select)} options={options} />
                            </div>
                            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                                Convert {from.toUpperCase()} to {to.toUpperCase()}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Currency