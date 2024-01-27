import React, { useState } from 'react'
import { useMoney } from './calculator/CurrencyConvertor/CustomHook/useMoney';
import { InputBox } from './calculator/CurrencyConvertor/Component';
import {useMoneyInfo} from './calculator/CurrencyConvertor2/CustomHook/UseMoneyInfo';
const App = () => {
    const [amount, setAmount] = useState();
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState();
    const [select, setSelect] = useState("usd");
    const [select2, setSelect2] = useState("inr");
    const currencyInfo = useMoney(from);
    const currencyInfo2 = useMoneyInfo(from);
    console.log("this is from info ",currencyInfo);
    console.log("this is from info2 ",currencyInfo2);
    const options = Object.keys(currencyInfo)
    const swap = () => {
        setFrom(to);
        setTo(from);
        setSelect(to);
        setSelect2(from);
        setConvertedAmount(amount);
        setAmount(convertedAmount);
    }
    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to]);
    }
    return (
        <>
        
        // <>
        //     <div
        //         className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        //         style={{
        //             backgroundImage: `url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        //         }}
        //     >
        //         <div className="w-full">
        //             <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        //                 <form
        //                     onSubmit={(e) => {
        //                         e.preventDefault();
        //                         convert()

        //                     }}
        //                 >
        //                     <div className="w-full mb-1">
        //                         <InputBox
        //                             label="From" amount={amount}
        //                             onAmountChange={(amount) => setAmount(amount)}
        //                             onCurrencyChange={(amount) => { setSelect(amount) }}
        //                             currencyOption={options}
        //                             select={select} setFrom={setFrom}

        //                         />
        //                     </div>
        //                     <div className="relative w-full h-0.5">
        //                         <button
        //                             type="button"
        //                             className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
        //                             onClick={swap}
        //                         >
        //                             swap
        //                         </button>
        //                     </div>
        //                     <div className="w-full mt-1 mb-4">
        //                         <InputBox
        //                             label="To" amount={convertedAmount}
        //                             onCurrencyChange={(amount) => { setSelect2(amount) }}
        //                             currencyOption={options}
        //                             select={select2}
        //                             setTo={setTo}
        //                         />
        //                     </div>
        //                     <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
        //                         Convert {from.toUpperCase()} to {to.toUpperCase()}
        //                     </button>
        //                 </form>
        //             </div>
        //         </div>
        //     </div>
        // </>
    )
}

export default App