export default function Home() {
  return (
    <main>
      <DailyChoice />
    </main>
  );
}

import dailychoice from '../styles/dailychoice.module.css'
function DailyChoice() {
  return (
    <div className={dailychoice.dlchoice}>
      <div className={dailychoice.image}>
        <img src="https://www.zooplus.pt/magazine/wp-content/uploads/2023/01/esquilo-da-siberia_1.jpg" alt="" />
        <div className={dailychoice.search}><span className={dailychoice.searchIcon}>🔍</span><br />Descubra mais!</div>
      </div>
      <div className={dailychoice.info}>
        <div className={dailychoice.title}>
          Esquilo-da-sibéria
        </div>
        <div className={dailychoice.description}>
          <p>
            O esquilo-da-sibéria (Tamias sibiricus) é uma espécie de esquilo originária das terras frias da Sibéria e do norte da Ásia. São Animais muito activos e, ao contrário de muitos roedores, são diurnos e ocupam a maior parte do dia a procurar e a armazenar comida. As tocas destes esquilos são geralmente escavadas no solo e muitas vezes têm mais de um metro de profundidade.
          </p>
        </div>
      </div>
    </div>
  )
}