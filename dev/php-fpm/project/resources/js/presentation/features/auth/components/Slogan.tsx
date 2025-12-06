import { JSX } from "react";

function Slogan(): JSX.Element {
    return (
        <div className="text-center">
            <p className="font-[Lobster] text-4xl">
                <span className="block">¡Grow faster! 🚀</span>
                <span className="block ml-10">  ¡Grow stronger! 💪</span>
            </p>
        </div>
    );
}

export { Slogan };
