import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';


function Layout(props) {
  const { children, posicao } = props; 

  return (
    <>
      <Header posicao={posicao} />
      {children}  {/* Renderiza o conteúdo filho */}
      <Footer />
    </>
  );
}

export default Layout;

































// import React from "react";
// import Header from "../Components/Header/Header";
// import Footer from "../Components/Footer/Footer";

// export default function Layout({children, posicao}) {
//     return (
//         <>
//             <Header posicao={posicao}/>
//                 {children}
//             <Footer/>
//         </>
//     )
// }