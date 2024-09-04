function openModal(modalSelector: string) {
  const modal = document.querySelector(modalSelector);

  if (!modal) {
    return console.error("Modal not found");
  }

  const content = modal.querySelector("#content");

  if (!content) {
    return console.error("Content not found");
  }

  modal.classList.remove("hidden");

  setTimeout(() => {
    modal.classList.remove("bg-transparent");
    modal.classList.add("bg-black/50");
    modal.classList.remove("backdrop-blur-0");
    modal.classList.add("backdrop-blur-[2px]");

    content.classList.remove("hidden");
    content.classList.add("flex");
    setTimeout(() => {
      content.classList.remove("-translate-y-full");
      content.classList.add("translate-y-0");
      content.classList.remove("opacity-0");
      content.classList.add("opacity-100");
    }, 250);
  }, 100);
}

function closeModal(modalSelector: string) {
  const modal = document.querySelector(modalSelector);

  if (!modal) {
    return console.error("Modal not found");
  }

  const content = modal.querySelector("#content");

  if (!content) {
    return console.error("Content not found");
  }

  content.classList.remove("opacity-100");
  content.classList.add("-translate-y-full");
  content.classList.remove("translate-y-0");
  content.classList.add("opacity-0");
  setTimeout(() => {
    content.classList.add("hidden");
    content.classList.remove("flex");

    setTimeout(() => {
      modal.classList.remove("backdrop-blur-[2px]");
      modal.classList.add("backdrop-blur-0");
      modal.classList.remove("bg-black/50");
      modal.classList.add("bg-transparent");
      setTimeout(() => {
        modal.classList.add("hidden");
      }, 100);
    }, 250);
  }, 100);
}

export { openModal, closeModal };
