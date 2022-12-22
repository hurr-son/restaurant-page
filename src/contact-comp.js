function createContactTitleEl() {
    const contactTitle = document.createElement('h2');
    contactTitle.innerText = 'Contact Us'
    contactTitle.classList.add('contact-title');
    return contactTitle;
}

function createContactTextEl() {
    const contactTextEl = document.createElement('p');
    contactTextEl.classList.add('contact-text');
    contactTextEl.innerText = '';
    return contactTextEl;
}

function createNameInputEl() {
    const nameInputEl = document.createElement("input");
    nameInputEl.type = 'text';
    nameInputEl.placeholder = 'Name'
    return nameInputEl;
}

function createEmailInputEl() {
    const emailInputEl = document.createElement("input");
    emailInputEl.type = 'email';
    emailInputEl.placeholder = 'Email'
    return emailInputEl;
}

function createPhoneInputEl() {
    const phoneInputEl = document.createElement("input");
    phoneInputEl.type = 'tel';
    phoneInputEl.placeholder = 'Phone Number'
    return phoneInputEl;
}

function createInquiryInputEl() {
    const inquiryInputEl = document.createElement('textarea');
    inquiryInputEl.classList.add('inquiry-input');
    inquiryInputEl.placeholder = 'What are you getting in touch about?';
    return inquiryInputEl;
}

function createSubmitBtnEl() {
    const submitBtnEl = document.createElement('input');
    submitBtnEl.type = 'submit'
    submitBtnEl.classList.add('submit-btn');
    return submitBtnEl;
}

function createFormEl() {
    const formEl = document.createElement('form');
    formEl.classList.add('contact-form');

    formEl.appendChild(createNameInputEl());
    formEl.appendChild(createEmailInputEl());
    formEl.appendChild(createPhoneInputEl());
    formEl.appendChild(createInquiryInputEl());
    formEl.appendChild(createSubmitBtnEl());
    return formEl;

}

function createContWrapEl() {
    const contactWrapEl = document.createElement('div');
    contactWrapEl.classList.add('contact-wrapper');
    contactWrapEl.classList.add('wrapper');

    contactWrapEl.appendChild(createContactTitleEl());
    contactWrapEl.appendChild(createContactTextEl())
    contactWrapEl.appendChild(createFormEl());
    return contactWrapEl;
}

export { createContWrapEl };