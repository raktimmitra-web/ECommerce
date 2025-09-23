const faqs = [
  {
    question: "What makes your store eco-friendly?",
    answer:
      "We focus on sustainable sourcing, minimal packaging, and low-impact shipping methods. Every product we sell is chosen with the planet in mind.",
  },
  {
    question: "Do you use plastic-free packaging?",
    answer:
      "Yes, all our orders are shipped in plastic-free, recyclable or compostable packaging materials, including paper tape and biodegradable mailers.",
  },
  {
    question: "Are your products certified organic or vegan?",
    answer:
      "Many of our products are certified organic, vegan, and cruelty-free. You can check the labels on each product page for full details.",
  },
  {
    question: "Can I return an item if it’s not right for me?",
    answer:
      "Absolutely. We offer returns within 30 days of delivery. To reduce waste, we encourage mindful shopping and only return unused items in original condition.",
  },
];


const container = document.getElementById("faqContainer");

document.addEventListener("DOMContentLoaded", () => {
    faqs.forEach((faq, index) => {
  const wrapper = document.createElement("div");
  wrapper.className = "border-b border-slate-200 py-4 cursor-pointer";

  const header = document.createElement("div");
  header.className = "flex items-center justify-between";
  header.innerHTML = `
            <h3 class="text-base font-medium">${faq.question}</h3>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="transition-all duration-500 ease-in-out icon">
                <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                    stroke="#1D293D" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;

  const answer = document.createElement("p");
  answer.className =
    "text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md opacity-0 max-h-0 -translate-y-2 pt-0 answer";
  answer.textContent = faq.answer;

  wrapper.appendChild(header);
  wrapper.appendChild(answer);
  container.appendChild(wrapper);

  header.addEventListener("click", () => {
    const allAnswers = document.querySelectorAll(".answer");
    const allIcons = document.querySelectorAll(".icon");

    allAnswers.forEach((el, i) => {
      if (i === index) {
        const isOpen = el.classList.contains("opacity-100");
        el.classList.toggle("opacity-100", !isOpen);
        el.classList.toggle("max-h-[300px]", !isOpen);
        el.classList.toggle("translate-y-0", !isOpen);
        el.classList.toggle("pt-4", !isOpen);
        el.classList.toggle("opacity-0", isOpen);
        el.classList.toggle("max-h-0", isOpen);
        el.classList.toggle("-translate-y-2", isOpen);

        allIcons[i].classList.toggle("rotate-180", !isOpen);
      } else {
        el.classList.remove(
          "opacity-100",
          "max-h-[300px]",
          "translate-y-0",
          "pt-4"
        );
        el.classList.add("opacity-0", "max-h-0", "-translate-y-2");
        allIcons[i].classList.remove("rotate-180");
      }
    });
  });
});
});
