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
			<div
				id="semaforo"
				className="d-flex align-items-center flex-column bd-highlight mb-3">
				<button
					className={"red " + (color == "red" ? "selected" : "")}
					onClick={() => setColor("red")}>
					Red
				</button>
				<button
					className={
						"yellow " + (color == "yellow" ? "selected" : "")
					}
					onClick={() => setColor("yellow")}>
					Yellow
				</button>
				<button
					className={"green " + (color == "green" ? "selected" : "")}
					onClick={() => setColor("green")}></button>
			</div>
		</div>
	);
}
