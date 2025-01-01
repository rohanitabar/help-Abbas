const ErrorStorage = document.getElementById('Error storage');
const ErrorBox = document.getElementById('Error-box');
const boxes = document.getElementById('boxes');

ErrorBox.addEventListener('click', () => {
    ErrorStorage.innerHTML=`
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
    boxes.style.display='none'
});
