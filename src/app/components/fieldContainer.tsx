"use client";

import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useState } from "react";

const FieldContainer = ({
    children,
} : {
    children: React.ReactNode;
}) => {
    const [isOpen, setIsOpen] = useState(true);

    return ( 
        <fieldset className={`border-gray-300 px-4 ${isOpen ? "border rounded-md transition-shadow" : "border-0"}`}>
            <legend className="text-sm font-semibold px-2 w-full">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    <div className={`${!isOpen ? "border-b border-gray-300 ml-[-25px] px-[0.4rem] mr-[0.75rem]" : "w-[0]"}`}></div>
                    <span>Filtragem</span>
                    <div className="border-b border-gray-300 w-full mx-2"></div>
                    <span className="text-xs text-gray-500">
                        { isOpen ? <ChevronUpIcon/> : <ChevronDownIcon/> }
                    </span>
                    <div className={`${!isOpen ? "border-b border-gray-300 mr-[-25px] px-[0.4rem] ml-[0.75rem]" : "w-[0]"}`}></div>
                </div>
            </legend>
            {isOpen && (
                <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[500px] mt-2" : "max-h-0"}`}
                >
                    {children}
                </div>
            )}            
        </fieldset>
    );
}

export default FieldContainer;