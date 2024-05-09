import cookie1Img from '../../assets/cookies/cookie-sin-fondo.avif';
import cookie2Img from '../../assets/cookies/cookie2.avif';
import cookie3Img from '../../assets/cookies/cookie3.avif';
import cookieRedVelvet1 from '../../assets/cookies/cookie-red1.avif';
import cookieRedVelvet2 from '../../assets/cookies/cookie-red2.avif';
import cookieRedVelvet3 from '../../assets/cookies/cookie-red3.avif';
import cookieNueces1 from '../../assets/cookies/cookie-nueces1.avif';
import cookieNueces2 from '../../assets/cookies/cookie-nueces2.avif';
import cookieNueces3 from '../../assets/cookies/cookie-nueces3.avif';
import cookieBrownie1 from '../../assets/cookies/cookie-brownie1.avif';
import cookieBrownie2 from '../../assets/cookies/cookie-brownie2.avif';
import cookieBrownie3 from '../../assets/cookies/cookie-brownie3.avif';
import cookieColor1 from '../../assets/cookies/cookie-color1.avif';
import cookieColor2 from '../../assets/cookies/cookie-color2.avif';
import cookieColor3 from '../../assets/cookies/cookie-color3.avif';
import cookieNavideña1 from '../../assets/cookies/cookie-navidad1.avif';
import cookieNavideña2 from '../../assets/cookies/cookie-navidad2.avif';
import cookieNavideña3 from '../../assets/cookies/cookie-navidad3.avif';
import cookieDdl1 from '../../assets/cookies/cookie-ddl1.avif';
import cookieDdl2 from '../../assets/cookies/cookie-ddl2.avif';
import cookieDdl3 from '../../assets/cookies/cookie-ddl3.avif';

const Cookies = [
  {
    id: 1,
    title: "Cookie clásica",
    description: "Cookie clásica con trozos grandes de chocolate y algunas cosas como las otras que tiene el budin",
    img: cookie1Img,
    imgArray: [cookie1Img, cookie2Img, cookie3Img],
    price: "600 c/u"
  },
  {
    id: 2,
    title: "Cookie red velvet",
    description: "Cookie tipo red velvet con trozos grandes de chocolate",
    img: cookieRedVelvet1,
    imgArray: [cookieRedVelvet1, cookieRedVelvet2, cookieRedVelvet3],
    price: "850 c/u"
  },
  {
    id: 3,
    title: "Cookie browine",
    description: "Cookie de browine con centro de dulce de leche",
    img: cookieBrownie2,
    imgArray: [cookieBrownie2, cookieBrownie3, cookieBrownie1],
    price: "850 c/u"
  },
  {
    id: 4,
    title: "Cookie con nueces",
    description: "Cookie con nueces y frutos secos",
    img: cookieNueces3,
    imgArray: [cookieNueces3, cookieNueces1, cookieNueces2],
    price: "700 c/u"
  },
  {
    id: 5,
    title: "Cookie de colores",
    description: "Cookie con de colores y sabores con rocklets / chips de chocolate",
    img: cookieColor1,
    imgArray: [cookieColor1, cookieColor2, cookieColor3],
    price: "700 c/u"
  },
  {
    id: 6,
    title: "Cookie navideña",
    description: "Cookie con formas de arbol navideño y figuras",
    img: cookieNavideña2,
    imgArray: [cookieNavideña2, cookieNavideña1, cookieNavideña3],
    price: "950 c/u"
  },
  {
    id: 7,
    title: "Cookie con ddl",
    description: "Cookie rellena de dulce de leche",
    img: cookieDdl1,
    imgArray: [cookieDdl1, cookieDdl2, cookieDdl3],
    price: "850 c/u"
  },
];

export default Cookies;
