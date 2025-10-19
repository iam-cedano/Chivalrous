import { JSX, useState } from "react";
import AccessMethod from "../shared/AccessMethod.enum";

interface SwitcherInterface {
    accessMethod: AccessMethod,
    onChangeAccessMethod: (accessMethod: AccessMethod) => void
}

function Switcher({accessMethod, onChangeAccessMethod}: SwitcherInterface): JSX.Element {
    const selected = 'bg-black text-white';
    const notSelected = 'bg-white text-black'; 

    return (
        <div key="switcher" className="flex justify-between text-center w-full pt-7">

            <div onClick={() => onChangeAccessMethod(AccessMethod.LOGIN)} className={`p-3 rounded-l-[10px] w-full  ${ (accessMethod == AccessMethod.LOGIN && selected) || notSelected }`}>
                <span className="text-3xl font-[Montserrat]">Login</span>
            </div>
            
            <div onClick={() => onChangeAccessMethod(AccessMethod.SIGN_UP)} className={`p-3 rounded-r-[10px] w-full ${ (accessMethod == AccessMethod.LOGIN && notSelected) || selected  }`}>
                <span className="text-3xl font-[Montserrat]">Sign Up</span>
            </div>
            
        </div>
    );
}

export {Switcher};