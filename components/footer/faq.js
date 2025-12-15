const Buttons = {
  btn: `<svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path
            d="M12 2.25C6.624 2.25 2.25 6.624 2.25 12C2.25 17.376 6.624 21.75 12 21.75C17.376 21.75 21.75 17.376 21.75 12C21.75 6.624 17.376 2.25 12 2.25ZM12 3.75C16.5653 3.75 20.25 7.43475 20.25 12C20.25 16.5653 16.5653 20.25 12 20.25C7.43475 20.25 3.75 16.5653 3.75 12C3.75 7.43475 7.43475 3.75 12 3.75ZM11.25 7.5V11.25H7.5V12.75H11.25V16.5H12.75V12.75H16.5V11.25H12.75V7.5H11.25Z"
            fill="currentColor"
          />
        </svg>`,
  activeBtn: `<svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 1.5C9.21523 1.5 6.54451 2.60625 4.57538 4.57538C2.60625 6.54451 1.5 9.21523 1.5 12C1.5 14.7848 2.60625 17.4555 4.57538 19.4246C6.54451 21.3938 9.21523 22.5 12 22.5C14.7848 22.5 17.4555 21.3938 19.4246 19.4246C21.3938 17.4555 22.5 14.7848 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5ZM6 11.25V12.75H18V11.25H6Z"
                  fill="#D7A81C"
                />
              </svg>`,
};

export function handleFaqAccordionToggle(questions) {
  questions.forEach((q) => {
    const btn = q.querySelector("button");
    btn.innerHTML = Buttons.btn;

    q.addEventListener("click", () => {
      const currentAnswer = q.nextElementSibling;
      const currentItem = q.closest(".faq-item");
      const currentBtn = q.querySelector("button");

      const isOpen = currentAnswer.classList.contains("active");

      questions.forEach((item) => {
        item.nextElementSibling.classList.remove("active");
        item.closest(".faq-item").classList.remove("active");

        item.querySelector("button").innerHTML = Buttons.btn;
      });

      if (!isOpen) {
        currentAnswer.classList.add("active");
        currentItem.classList.add("active");
        currentBtn.innerHTML = Buttons.activeBtn;
      }
    });
  });
}
