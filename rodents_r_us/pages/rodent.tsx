import Image from 'next/image';

export default function Page() {
	return (
		<main>
			<Rodent />
		</main>
	);
}

// TESTE
const castor = {
	name: "Castor",
	description: "Castor é um gênero de roedores semi-aquáticos, da família Castoridae, nativo da América do Norte e da Europa, sendo o único gênero ainda existente dessa família, com duas espécies remanescentes: o C. fiber (castor-europeu) e o C. canadensis (castor-americano).",
	image: "/American_Beaver.jpg"
}

import rodent from 'styles/rodent.module.css'
function Rodent() {
	return (
		<>
			<h1>{castor.name}</h1>
			<p>{castor.description}</p>
			<Image className={rodent.image} src={castor.image} alt={castor.name} width={1000} height={1000} />
		</>
	)
}