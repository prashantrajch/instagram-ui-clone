import React from "react";
import MessageProfileCard from "../../components/Message/MessageProfileCard";

function Message() {
  let messageCardData = [
    {
      userName: "happy_panda_5678",
      message: "happy_panda_5678 sent an attachment",
      hour: "2 h",
      isRead: true,
    },
    {
      userName: "clever_dolphin_1234",
      message: "You: Uth glees",
      hour: "2 D",
      isRead: false,
    },
    {
      userName: "lovely_moon_9876",
      message: "Can you help me with something?",
      hour: "12:00 PM",
      isRead: true,
    },
    {
      userName: "brave_tiger_4567",
      message: "Sure, what do you need help with?",
      hour: "12:30 PM",
      isRead: false,
    },
    {
      userName: "vibrant_star_3456",
      message: "I have a question about ReactJS.",
      hour: "1:00 PM",
      isRead: false,
    },
    {
      userName: "sunny_flower_7890",
      message: "What's your question?",
      hour: "1:30 PM",
      isRead: false,
    },
    {
      userName: "smart_butterfly_2345",
      message: "Can I join the conversation?",
      hour: "2:00 PM",
      isRead: true,
    },
    {
      userName: "gentle_lion_8901",
      message: "Of course!",
      hour: "2:30 PM",
      isRead: false,
    },
    {
      userName: "sparkling_eagle_6789",
      message: "I need help with JavaScript.",
      hour: "3:00 PM",
      isRead: true,
    },
    {
      userName: "cool_unicorn_0123",
      message: "What specifically do you need help with?",
      hour: "3:30 PM",
      isRead: false,
    },
  ];

  return (
    <div className="w-full flex">
      <div className="message-details sm:max-w-[398px] w-full border-r h-[75vh]">
        <header className="w-full sticky top-0 bg-white z-[2]">
          <div className="px-6 pt-9 pb-3 flex items-center justify-between">
            <h3 className="font-bold text-lg flex items-center gap-2 cursor-pointer">
              prashant_raj_ch{" "}
              <span className="mt-1">
                <svg
                  aria-label="Down Chevron Icon"
                  className="x1lliihq x1n2onr6 x5n08af"
                  fill="currentColor"
                  height="12"
                  role="img"
                  viewBox="0 0 24 24"
                  width="12"
                >
                  <title>Down Chevron Icon</title>
                  <path d="M12 17.502a1 1 0 0 1-.707-.293l-9-9.004a1 1 0 0 1 1.414-1.414L12 15.087l8.293-8.296a1 1 0 0 1 1.414 1.414l-9 9.004a1 1 0 0 1-.707.293Z"></path>
                </svg>
              </span>
            </h3>
            <div className="icon">
              <svg
                aria-label="New message"
                className="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>New message</title>
                <path
                  d="M12.202 3.203H5.25a3 3 0 0 0-3 3V18.75a3 3 0 0 0 3 3h12.547a3 3 0 0 0 3-3v-6.952"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
                <path
                  d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 0 1 2.004 0l1.224 1.225a1.417 1.417 0 0 1 0 2.004Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="16.848"
                  x2="20.076"
                  y1="3.924"
                  y2="7.153"
                ></line>
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-between px-6 pt-[14px] pb-[10px]">
            <h3 className="font-bold">Messages</h3>
            <p className="text-gray-500 font-semibold text-sm cursor-pointer">
              Requests
            </p>
          </div>
        </header>
        <div className="message-profile h-full overflow-x-scroll scrollBar">
          {messageCardData.map((item, ind) => (
            <MessageProfileCard key={ind} item={item} ind={ind} />
          ))}
        </div>
      </div>
      <div className="message-inbox w-full hidden sm:block">
        <div className="flex justify-center h-full flex-col gap-3 items-center">
          <div>
            <svg
              aria-label=""
              className="x1lliihq x1n2onr6 x5n08af"
              fill="currentColor"
              height="96"
              role="img"
              viewBox="0 0 96 96"
              width="96"
            >
              <title></title>
              <path d="M48 0C21.532 0 0 21.533 0 48s21.532 48 48 48 48-21.532 48-48S74.468 0 48 0Zm0 94C22.636 94 2 73.364 2 48S22.636 2 48 2s46 20.636 46 46-20.636 46-46 46Zm12.227-53.284-7.257 5.507c-.49.37-1.166.375-1.661.005l-5.373-4.031a3.453 3.453 0 0 0-4.989.921l-6.756 10.718c-.653 1.027.615 2.189 1.582 1.453l7.257-5.507a1.382 1.382 0 0 1 1.661-.005l5.373 4.031a3.453 3.453 0 0 0 4.989-.92l6.756-10.719c.653-1.027-.615-2.189-1.582-1.453ZM48 25c-12.958 0-23 9.492-23 22.31 0 6.706 2.749 12.5 7.224 16.503.375.338.602.806.62 1.31l.125 4.091a1.845 1.845 0 0 0 2.582 1.629l4.563-2.013a1.844 1.844 0 0 1 1.227-.093c2.096.579 4.331.884 6.659.884 12.958 0 23-9.491 23-22.31S60.958 25 48 25Zm0 42.621c-2.114 0-4.175-.273-6.133-.813a3.834 3.834 0 0 0-2.56.192l-4.346 1.917-.118-3.867a3.833 3.833 0 0 0-1.286-2.727C29.33 58.54 27 53.209 27 47.31 27 35.73 36.028 27 48 27s21 8.73 21 20.31-9.028 20.31-21 20.31Z"></path>
            </svg>
          </div>
          <p className="text-2xl">Your messages</p>
          <span className="text-sm text-gray-500">
            Send Provate phtots and messages to a friend or group
          </span>
          <button className="px-3 bg-blue-600 text-white text-sm py-2 rounded-lg font-bold">
            Send message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Message;
