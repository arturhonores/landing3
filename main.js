// referencing DOM elements
const form = document.getElementById("form")
const inputLinks = document.getElementById("inputLinks")
const linksList = document.getElementById("linksList")

const putLinks = (link) => {
    const liLinks = `<li class="flex justify-between items-center bg-white px-6 py-6 my-4 rounded-xl">
    <p class="font-bold text-lg">${link}</p>
    <div class="flex items-center gap-3">
      <p class="text-teal-400 font-bold text-lg">https://rel.ink/k4IKyk</p>
      <button class="btn2 px-7 py-1">copy</button>
      <button class="deleteButton bg-red-400 py-1 px-1 rounded-xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" stroke-width="2" stroke="white" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </li>`
    linksList.innerHTML += liLinks
}

form.addEventListener("submit", e => {
    e.preventDefault()
    putLinks(inputLinks.value)
})

linksList.addEventListener("click", e => {
    if (e.target.classList.contains("deleteButton") || e.target.closest(".deleteButton")) {
        e.target.closest("li").remove()
    }
})


