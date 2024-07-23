import React from 'react';
import ListElem from './ListElem/ListElem';
import "./Footer.css";

export default function Footer() {
  return (
    <footer className='footer-container' style={{backgroundImage: "url(./images/footer/footer-bg.svg)"}}>
        <div className="footerContainer">
          <div className="top">
            <div className="details">
              <div className="right">
              <div className="img">
                <img src="./images/logo.svg" alt="logo"/>
              </div>
              <ul>
                <li>شنبه تا پنجشنبه: 10 صبح تا 17 بعد از ظهر</li>
                <li>جمعه: 10 صبح تا 14 بعد از ظهر</li>
                <li>
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12.4309C12.55 12.4309 13.021 12.2349 13.413 11.8429C13.8043 11.4516 14 10.9809 14 10.4309C14 9.88091 13.8043 9.40991 13.413 9.01791C13.021 8.62657 12.55 8.43091 12 8.43091C11.45 8.43091 10.9793 8.62657 10.588 9.01791C10.196 9.40991 10 9.88091 10 10.4309C10 10.9809 10.196 11.4516 10.588 11.8429C10.9793 12.2349 11.45 12.4309 12 12.4309ZM12 22.0559C11.8667 22.0559 11.7333 22.0309 11.6 21.9809C11.4667 21.9309 11.35 21.8642 11.25 21.7809C8.81667 19.6309 7 17.6352 5.8 15.7939C4.6 13.9519 4 12.2309 4 10.6309C4 8.13091 4.80433 6.13924 6.413 4.65591C8.021 3.17257 9.88333 2.43091 12 2.43091C14.1167 2.43091 15.979 3.17257 17.587 4.65591C19.1957 6.13924 20 8.13091 20 10.6309C20 12.2309 19.4 13.9519 18.2 15.7939C17 17.6352 15.1833 19.6309 12.75 21.7809C12.65 21.8642 12.5333 21.9309 12.4 21.9809C12.2667 22.0309 12.1333 22.0559 12 22.0559Z" fill="#DABB9E"/>
                  </svg>
                  <span>بوشهر، برازجان خ بیمارستان</span>
                </li>
                <li>
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4.43091H4C2.9 4.43091 2.01 5.33091 2.01 6.43091L2 18.4309C2 19.5309 2.9 20.4309 4 20.4309H20C21.1 20.4309 22 19.5309 22 18.4309V6.43091C22 5.33091 21.1 4.43091 20 4.43091ZM19.6 8.68091L12.53 13.1009C12.21 13.3009 11.79 13.3009 11.47 13.1009L4.4 8.68091C4.29973 8.62462 4.21192 8.54857 4.14189 8.45736C4.07186 8.36615 4.02106 8.26169 3.99258 8.15028C3.96409 8.03887 3.9585 7.92284 3.97616 7.80922C3.99381 7.69559 4.03434 7.58672 4.09528 7.48921C4.15623 7.3917 4.23632 7.30756 4.33073 7.2419C4.42513 7.17624 4.53187 7.13042 4.6445 7.10721C4.75712 7.08399 4.87328 7.08387 4.98595 7.10686C5.09863 7.12984 5.20546 7.17544 5.3 7.24091L12 11.4309L18.7 7.24091C18.7945 7.17544 18.9014 7.12984 19.014 7.10686C19.1267 7.08387 19.2429 7.08399 19.3555 7.10721C19.4681 7.13042 19.5749 7.17624 19.6693 7.2419C19.7637 7.30756 19.8438 7.3917 19.9047 7.48921C19.9657 7.58672 20.0062 7.69559 20.0238 7.80922C20.0415 7.92284 20.0359 8.03887 20.0074 8.15028C19.9789 8.26169 19.9281 8.36615 19.8581 8.45736C19.7881 8.54857 19.7003 8.62462 19.6 8.68091Z" fill="#DABB9E"/>
                  </svg>
                  <span>erfang.webdeveloper@gmail.com</span>
                </li>
                <li>
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 1.43091H8C6.34 1.43091 5 2.77091 5 4.43091V20.4309C5 22.0909 6.34 23.4309 8 23.4309H16C17.66 23.4309 19 22.0909 19 20.4309V4.43091C19 2.77091 17.66 1.43091 16 1.43091ZM17 18.4309H7V4.43091H17V18.4309ZM14 21.4309H10V20.4309H14V21.4309Z" fill="#DABB9E"/>
                  </svg>
                  <span>09372352125</span>
                </li>
              </ul>
              </div>
              <ListElem title="دسترسی سریع" lnk1="قهوه" lnk2="نوشیدنی پودری و فوری" lnk3="چای و دمنوش" lnk4="خوشمزه ها" lnk5="تجهیزات قهوه" />
              <ListElem title="ارتباط با ما" lnk1="درباره ما" lnk2="پشتیبانی" lnk3="ارتباط با ما" lnk4="قوانین و مقررات" lnk5="راهنمای خرید آنلاین"/>
            </div>
            <div className="badges">
                <img className='head' src="./images/footer/coffeeBeans.svg" alt="img" />
                <div className="imgs">
                  <img src="./images/footer/nemad1.svg" alt="nemad" />
                  <img src="./images/footer/nemad1.svg" alt="nemad" />
                  <img src="./images/footer/nemad1.svg" alt="nemad" />
                </div>
            </div>
          </div>

          <div className="desc">
              <p>کافینا گسترده ترین فروش قهوه و چای تخصصی در سراسر جهان. از دانه‌های اسپرسوی طعم‌دار، ما انواعی از محصولات را ارائه می‌دهیم تا کام هر مشتری را وسوسه کند. برای کسانی که به دنبال تجهیزات منحصر به فرد دم کردن هستند، همچنین طیف کاملی از اسپرسوسازهای با کیفیت، آسیاب، آبجو، پرس فرنچ و غیره. همه اینها به راحتی با کلیک یک دکمه در دسترس هستند!</p>
          </div>

          <div className='message'>
              <div className="text">
                <p className='title'>
                  اطلاع رسانی
                </p>
                <p className='desc'>
                  ایمیل تان را وارد کنید تا از تخفیف ها باخبر شوید.
                </p>
              </div>
              <form action="#">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="#603809" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#603809" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <input type="email" placeholder='ایمیل خود زا وارد کنید' />
                <input type="submit" value="ارسال" />
              </form>
          </div>

          <div className="footer">
            <p>کلیه حقوق این سایت متعلق به آچو میباشید.</p>
            <div className="socials">
              <a href="#">
                <img src="./images/footer/icon-google.svg" alt="icon" />
              </a>
              <a href="#">
                <img src="./images/footer/icon-insta.svg" alt="icon" />
              </a>
              <a href="#">
                <img src="./images/footer/icon-facebook.svg" alt="icon" />
              </a>
              <a href="#">
                <img src="./images/footer/icon-x.svg" alt="icon" />
              </a>
            </div>
          </div>
        </div>
    </footer>
  )
}
