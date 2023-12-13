import cookieImg from '../../assets/cookies/cookie-sin-fondo.png';
import cookie2Img from '../../assets/cookies/cookie-prueba1.jpg';
import cookie3Img from '../../assets/cookies/cookie-prueba3.jpg';

import cookieRedVelvet1 from '../../assets/cookies/cookie-red-velvet.jpg';
import cookieRedVelvet2 from '../../assets/cookies/cookie-red-velvet2.webp';
import cookieRedVelvet3 from '../../assets/cookies/cookie-red-velvet3.webp';
import cookieNueces1 from '../../assets/cookies/cookie-nueces.jpg';
import cookieNueces2 from '../../assets/cookies/cookie-nueces2.jpg';
import cookieBrownie1 from '../../assets/cookies/cookie-brownie.jpg';
import cookieBrownie2 from '../../assets/cookies/cookie-brownie2.png';
import cookieBrownie3 from '../../assets/cookies/cookie-brownie3.jpg';

const Cookies = [
  {
    id: 1,
    title: "Cookie clásica",
    description: "Cookie clásica con trozos grandes de chocolate y algunas cosas como las otras que tiene el budin",
    img: cookieImg,
    imgArray: [cookieImg, cookie2Img, cookie3Img],
    price: "200 c/u"
  },
  {
    id: 2,
    title: "Cookie red velvet",
    description: "Cookie tipo red velvet con trozos grandes de chocolate",
    img: cookieRedVelvet1,
    imgArray: [cookieRedVelvet1, cookieRedVelvet2, cookieRedVelvet3],
    price: "250 c/u"
  },
  {
    id: 3,
    title: "Cookie browine",
    description: "Cookie de browine con centro de dulce de leche",
    img: cookieBrownie2,
    imgArray: [cookieBrownie2, cookieBrownie3, cookieBrownie1],
    price: "300 c/u"
  },
  {
    id: 4,
    title: "Cookie con nueces",
    description: "Cookie con nueces y frutos secos",
    img: cookieNueces2,
    imgArray: [cookieNueces2, cookieNueces1],
    price: "150 c/u"
  },
];

export default Cookies;
