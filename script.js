"use strict";

const unreadMessages = document.querySelectorAll(".unread");
const unread = document.querySelector(".count");
const markAll = document.querySelector(".heading__s");

unread.innerText = unreadMessages.length;

unreadMessages.forEach((message) => {
  message.addEventListener('click', ()=>{
    message.classList.remove('unread');
    const newUnreadMessages = document.querySelectorAll(".unread");
    unread.innerText = newUnreadMessages.length;
  })
})

markAll.addEventListener('click', ()=>{
  unreadMessages.forEach((message) => {
    message.classList.remove('unread');
  })
  const newUnreadMessages = document.querySelectorAll(".unread");
  unread.innerText = newUnreadMessages.length;
})
