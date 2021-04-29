import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	// const [variable,funcion(que modifica mi cariable)] = const ()
	const [color, setColor] = useState("");

	return (
		<div className="container">
			<div id="barrita"></div>
			<div id="semaforo">
				<button
					className={color == "red" ? color : ""}
					onClick={() => setColor("red")}>
					Red
				</button>
				<button
					className={color == "yellow" ? color : ""}
					onClick={() => setColor("yellow")}>
					Yellow
				</button>
				<button
					className={color == "green" ? color : ""}
					onClick={() => setColor("green")}>
					Green
				</button>
			</div>
		</div>
	);
}
