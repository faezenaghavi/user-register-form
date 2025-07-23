const savedPeople = JSON.parse(localStorage.getItem("people"));
if (savedPeople) people = savedPeople;

const loginBoxElement = document.getElementById('loginBox');
const infoBoxElement = document.getElementById('informationBox');
const buttonElement = document.getElementById('btn');
const informationForm = document.querySelector('.information-form');

// اطمینان از وجود همه عناصر مورد نیاز
if (!loginBoxElement || !infoBoxElement || !buttonElement || !informationForm) {
    console.error('برخی از عناصر مورد نیاز پیدا نشدند!');
}


function informationBox() {
    loginBoxElement.style.left = '27px';
    infoBoxElement.style.left = '-350px';
    buttonElement.style.left = '0';
    informationForm.classList.add('active');
}

function loginBox() {
    loginBoxElement.style.left = '350px';
    infoBoxElement.style.left = '25px';
    buttonElement.style.left = '150px';
    informationForm.classList.remove('active');
}
// login information
let people = [];
// افزودن کاربر جدید به فرم لیست
const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const familyInput = document.getElementById("family");
const emailInput = document.getElementById("email");
const password= document.getElementById("password")
const jobInput = document.getElementById("job");
const phoneInput = document.getElementById("phone");
const genderSelect = document.getElementById("gender"); 
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const newperson = {
        name: nameInput.value.trim(),
        family: familyInput.value.trim(),
        email: emailInput.value.trim(), 
        phone: phoneInput.value.trim(),
        job: jobInput.value.trim(),
        gender: genderSelect.value
    };

    if (!newperson.name|| !newperson.family || !newperson.email) {
        alert("لطفا فیلدهای مورد نظر را پر کنید");
        return;
    }
    people.push(newperson);
    console.log(people);
    this.reset();
});
// form information
// نمایش همه کاربران
document.getElementById("showmodal").addEventListener("click",()=>{
     if(people.length===0){
    modal.innerHTML=`<h3>هنوز هیچ کاربری ثبت نشده است</h3>`
 }else{
    modal.innerHTML=`<h3>لیست همه کاربران:</h3>`;
    const list=document.createElement("ul");

people.forEach((person ,index) => {
const{name,family,email,job,phone,gender}=person;
const li=document.createElement("li");
li.innerText=`${index + 1}. ${name} ${family}
    📧 ${email}
    👨‍💼 ${job || '---'}
    📞 ${phone || '---'}
    🚻 ${gender || '---'}
`;
list.appendChild(li);
    });
modal.appendChild(list);
 }
 handleshowModal();
overlay.addEventListener("click" , ()=>{
    overlay.style.opacity="0"
    overlay.style.visibility="hidden"
    modal.style.opacity="0"
    modal.style.visibility="hidden"
})

});
const handleshowModal= ()=>{
    overlay.style.opacity="1"
    overlay.style.visibility="visible"
    modal.style.opacity="1"
    modal.style.visibility="visible"
};

// پیدا کردن فرد با ایمیل
 
document.getElementById("findbyEmail").addEventListener("click" , ()=>{
    const emailToFind=prompt("لطفا ایمیل خود را وارد کنید");
   const person = people.find(p => {
    return p.email === emailToFind.trim();
});

    if (person) {
          const { name, family, job, phone, gender } = person;
        modal.innerHTML = `
            <h3>فرد یافت شد:</h3>
            <p>نام: ${name}</p>
            <p>نام خانوادگی: ${family}</p>
            <p>شغل: ${job}</p>
            <p>شماره تلفن: ${phone}</p>
            <p>جنسیت: ${gender}</p>
        `;
    } else {
        modal.innerHTML = `<p>فردی با این ایمیل یافت نشد</p>`;
    }


    handleshowModal();
    overlay.addEventListener("click" , ()=>{
    overlay.style.opacity="0"
    overlay.style.visibility="hidden"
    modal.style.opacity="0"
    modal.style.visibility="hidden"
})
});

// آیا همه افراد شاغلند
document.getElementById("checkIfAllHaveJob").addEventListener("click",()=>{
    const allHaveJob=people.every( p=> p.job.trim() !=="");
    modal.innerHTML=allHaveJob
    ? "<p>همه افراد شاغلند✅</p>"
    : "<p>برخی افراد شغل خود را ثبت نکرده اند❌</p>";

   handleshowModal();
    overlay.addEventListener("click" , ()=>{
    overlay.style.opacity="0"
    overlay.style.visibility="hidden"
    modal.style.opacity="0"
    modal.style.visibility="hidden"
})
})
// آیا حداقل یک مرد وجود دارد؟
document.getElementById("checkIfAnyMale").addEventListener("click",()=>{
 const hasMan=people.some(p => p.gender==="مرد");
 modal.innerHTML=hasMan
 ? "حداقل یک مرد ثبت شده است🧑"
 : "هیج مردی ثبت نشده است❌"

 handleshowModal();
 overlay.addEventListener("click" , ()=>{
    overlay.style.opacity="0"
    overlay.style.visibility="hidden"
    modal.style.opacity="0"
    modal.style.visibility="hidden"
});
})













               
















