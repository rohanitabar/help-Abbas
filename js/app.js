const boxes = document.getElementById('boxes');  
const ErrorBox = document.getElementById('Error-box');
const vorodBox = document.getElementById('vorod-box');
const downloadBox = document.getElementById('download-box');
const hafezehBox = document.getElementById('hafezeh-box');

ErrorBox.addEventListener('click', () => {  
    const ErrorStorage = document.createElement('div');  
    ErrorStorage.id = 'Error storage'; 
    ErrorStorage.className = 'content'; 
    ErrorStorage.className = 'py-1'; 
    ErrorStorage.style.marginRight='20px'

    ErrorStorage.innerHTML = `  
        <div class="message alert" style="display: none;"></div>  
        <h2 class="mb-5">اشکال دسترسی به حافظه</h2>  
        <p>  
            بعد از نصب آکاگرام، برای دانلود فیلم های آموزشی اجازه دسترسی به حافظه لازم است  
        </p>  
        <img src="./img/help/Error-Hafezeh1.jpg" />  
        <p>  
            درصورتی که اجازه نداده باشید، برنامه آکاگرام را حذف و دوباره نصب کنید و <b>اجازه دادن </b>را بزنید.  
        </p>  
        <img src="./img/help/Error-Hafezeh.jpg" />  
    `;  
    
    boxes.style.display = 'none';
    document.body.appendChild(ErrorStorage); 
});

vorodBox.addEventListener('click', () => {  
    const ErrorStorage = document.createElement('div');  
    ErrorStorage.id = 'vorod box'; 
    ErrorStorage.className = 'content'; 
    ErrorStorage.className = 'py-1'; 
    ErrorStorage.style.marginRight='20px'

    ErrorStorage.innerHTML = `  
            <div class="message alert" style="display: none;"></div>

            <h2 class="mb-5">ورود به دوره هایی که ثبت نام کردید</h2>
            <p>
                 برای ورود به دوره هایی که ثبت نام کردید و مجاز به استفاده از آن ها هستید وارد <b>دوره های من</b> شوید
            </p>
            <img src="/img/help/Vorod-1.jpg" />
            <p>
                <b>نکته:</b> درصورتی که دوره ای که ثبت نام کردید در قسمت دوره های من نباشد، احتمالا دو یا چند خط موبایل دارید. لازم است دقت کنید موقع
                ورود به آکاگرام با شماره ای که موقع ثبت نام به استاد دوره اعلام کرده اید وارد شوید.
            </p>
            <img src="/img/help/Vorod-2.jpg" />
            <p>
                برای حل مشکل وارد <b>پروفایل</b> شده و بعد <b>خروج از حساب کاربری</b> کنید و دوباره با شماره ثبت نام شده در دوره وارد آکاگرام شوید.
            </p>
            <img src="/img/help/Vorod-3.jpg" />
    `;  
    
    boxes.style.display = 'none';
    document.body.appendChild(ErrorStorage); 
});

downloadBox.addEventListener('click', () => {  
    const ErrorStorage = document.createElement('div');  
    ErrorStorage.id = 'download box'; 
    ErrorStorage.className = 'content'; 
    ErrorStorage.className = 'py-1'; 
    ErrorStorage.style.marginRight='20px'

    ErrorStorage.innerHTML = `  
            <div class="message alert" style="display: none;"></div>

            <h2 class="mb-5">اشکال دسترسی در دانلود کلیپ ها</h2>
            <p>
                اگر در دانلود کلیپ دچار مشکل شدید، انگشت خود را 3 ثانیه روی کلیپ نگه دارید و <b>ریست وضعیت </b>را بزنید.
            </p>
            <img src="./img/help/Error_Clip.jpg" />
            <p>
                سپس دوباره کلیپ را دانلود کنید.
            </p>
            <p>
                <b>نکته: </b>اگر به صورت همزمان تعداد زیادی کلیپ را برای دانلود بزنید، امکان ایجاد کندی شدید و یا اشکال وجود دارد.
            </p>
    `;  
    
    boxes.style.display = 'none';
    document.body.appendChild(ErrorStorage); 
});

hafezehBox.addEventListener('click', () => {  
    const ErrorStorage = document.createElement('div');  
    ErrorStorage.id = 'download box'; 
    ErrorStorage.className = 'content'; 
    ErrorStorage.className = 'py-1'; 
    ErrorStorage.style.marginRight='20px'

    ErrorStorage.innerHTML = `  
            <div class="message alert" style="display: none;"></div>

            <h2 class="mb-5">حافظه‌ی پیش فرض</h2>
            <p>
                اگر فضای ذخیره سازی فعلی شما پر شده است می‌توانید محل ذخیره سازی محتواهای دوره را تغییر دهید.
                پس از این تغییر محتواهایی از دوره که اقدام به دانلود آنها می‌کنید در محل جدید ذخیره خواهند شد.
                <br />
                برای تغییر حافظه پیش فرض دوره روی دکمه‌ تنظیمات دوره کلیک کنید.
            </p>
            <img src="./img/help/pishfarz-1.jpg" />
            <p>
                از پنجره باز شده روی <b>انتخاب محل ذخیره محتوای دوره</b> کلیک کنید.
            </p>
            <img src="./img/help/Pishfarz-2.jpg" />
            <p>
                از بین گزینه‌های موجود حافظه مورد نظر خود را انتخاب نمایید.
            </p>
            <img src="./img/help/pishfarz-3.jpg" />
    `;  
    
    boxes.style.display = 'none';
    document.body.appendChild(ErrorStorage); 
});