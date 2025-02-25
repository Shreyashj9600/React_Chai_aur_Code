import { useState } from "react";

const Bgchanger = () => {
    const [color, setColor] = useState("olive");

    const colorChanger = (color) => {
        setColor(color);
        console.log("btn");
    };

    return (
        <>
            <div
                className="flex flex-col justify-end min-h-screen"
                style={{ backgroundColor: color }}
            >
                <div className="border border-black-600 h-20 m-10 rounded-md">
                    <ul className="flex gap-10 p-6">
                        <li className="border p-1  rounded bg-red-500 ">
                            <button
                                onClick={() => colorChanger("red")}
                                className="text-white"
                            >
                                Red
                            </button>
                        </li>
                        <li className="border p-1  rounded bg-blue-500 ">
                            <button
                                onClick={() => colorChanger("blue")}
                                className="text-white"
                            >
                                blue
                            </button>
                        </li>
                        <li className="border p-1  rounded bg-green-500 ">
                            <button
                                onClick={() => colorChanger("green")}
                                className="text-white"
                            >
                                green
                            </button>
                        </li>
                        <li className="border p-1  rounded bg-orange-500 ">
                            <button
                                onClick={() => colorChanger("orange")}
                                className="text-white"
                            >
                                orange
                            </button>
                        </li>
                        <li className="border p-1  rounded bg-pink-500 ">
                            <button
                                onClick={() => colorChanger("pink")}
                                className="text-white"
                            >
                                pink
                            </button>
                        </li>
                        <li className="border p-1  rounded bg-tan-900 ">
                            <button
                                onClick={() => colorChanger("tan")}
                                className="text-black"
                            >
                                tan
                            </button>
                        </li>
                        <li className="border p-1  rounded bg-yellow-500 ">
                            <button
                                onClick={() => colorChanger("yellow")}
                                className="text-white"
                            >
                                yellow
                            </button>
                        </li>

                        <li className="border p-1  rounded bg-gray-500 ">
                            <button
                                onClick={() => colorChanger("#121212")}
                                className="text-white"
                            >
                                gray
                            </button>
                        </li>
                        <li className="border p-1  rounded bg-white ">
                            <button
                                onClick={() => colorChanger("white")}
                                className="text-black"
                            >
                                white
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Bgchanger;
