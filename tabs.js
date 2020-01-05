const messageTab = document.getElementById("message_button");
const messageContent = document.getElementById("message_tab");

const contactTab = document.getElementById("contact_button");
const contactContent = document.getElementById("contact_info_tab");

const faqTab = document.getElementById("faq_button");
const faqContent = document.getElementById("faq_tab");

const displayMessageTab = () => {
    closeAllTabs();
    messageTab.classList.add("tabOpen");
    messageContent.classList.remove("hide-content");
}

const displayContactTab = () => {
    closeAllTabs();
    contactTab.classList.add("tabOpen");
    contactContent.classList.remove("hide-content");
}

const displayFaqTab = () => {
    closeAllTabs();
    faqTab.classList.add("tabOpen");
    faqContent.classList.remove("hide-content");
}

const closeAllTabs = () => {
    messageContent.classList.add("hide-content");
    contactContent.classList.add("hide-content");
    faqContent.classList.add("hide-content");
    messageTab.classList.remove("tabOpen");
    contactTab.classList.remove("tabOpen");
    faqTab.classList.remove("tabOpen");
    
}

displayMessageTab();