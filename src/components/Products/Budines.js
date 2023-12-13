import budin1 from '../../assets/budines/budin1.jpg';

import budin2 from '../../assets/budines/budin-prueba2.jpg';
import budin3 from '../../assets/budines/budin-prueba3.avif';
import budinChoco1 from '../../assets/budines/budin-choco.jpg';
import budinChoco2 from '../../assets/budines/budin-choco2.jpg';
import budinChoco3 from '../../assets/budines/budin-choco3.jpg';
import budinBanana1 from '../../assets/budines/budin-banana.avif';
import budinBanana2 from '../../assets/budines/budin-banana2.avif';
import budinBanana3 from '../../assets/budines/budin-banana3.avif';
import budinLimon1 from '../../assets/budines/budin-limon.jpg';
import budinLimon2 from '../../assets/budines/budin-limon2.jpg';
import budinLimon3 from '../../assets/budines/budin-limon3.webp';

const Budines = [
  {
    id: 1,
    title: "Budín clásico",
    description: "Budín clásico sabor vainilla",
    img: budin1,
    imgArray: [budin1, budin2, budin3],
    price: "200 c/u"
  },
  {
    id: 2,
    title: "Budín de limón",
    description: "Budín con cobertura y sabor a limón",
    img: budinLimon1,
    imgArray: [budinLimon1, budinLimon2, budinLimon3],
    price: "250 c/u"
  },
  {
    id: 3,
    title: "Budín de chocolate",
    description: "Budín de chocolate con trozos de chocolate grandes",
    img: budinChoco1,
    imgArray: [budinChoco1, budinChoco2, budinChoco3],
    price: "300 c/u"
  },
  {
    id: 4,
    title: "Budín de banana",
    description: "Budín con sabor banana y trocitos de banana",
    img: budinBanana3,
    imgArray: [budinBanana3, budinBanana2, budinBanana1],
    price: "150 c/u"
  },
];

export default Budines;
