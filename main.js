// referencing DOM elements
const form = document.getElementById("form")
const inputLinks = document.getElementById("inputLinks")
const linksList = document.getElementById("linksList")
const errorMessage = document.getElementById("errorMessage")


//add links to list
const putLinks = (link) => {
  if (link === "") {
    errorMessage.textContent = "Error: link is empty"
    setTimeout(() => {
      errorMessage.textContent = ""
    }, 2000)
  } else {
    const newShortLink = generateShortLinks()
    const liLinks = `<li class="flex flex-col md:flex-row md:justify-between items-center bg-white px-6 py-6 my-4 rounded-xl">
    <p class="font-bold text-lg">${link}</p>
    <div class="flex flex-col md:flex-row items-center gap-3">
      <p class="text-teal-400 font-bold text-lg">${newShortLink}</p>
      <div class="flex justify-center items-center gap-2">
      <button class="btn2 px-7 py-1">copy</button>
      <button class="deleteButton bg-red-400 py-1 px-1 rounded-xl hover:brightness-110"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" stroke-width="2" stroke="white" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      </div>  
    </div>
  </li>`
    linksList.innerHTML += liLinks
  }
}

// Event handler for form submission
form.addEventListener("submit", e => {
  e.preventDefault()
  putLinks(inputLinks.value.trim())
})

// Event handler for deleting links
linksList.addEventListener("click", e => {
  if (e.target.classList.contains("deleteButton") || e.target.closest(".deleteButton")) {
    e.target.closest("li").remove()
  }
})

//function for create links
const generateShortLinks = () => {
  const alphanumeric = "abcdefghijklmnopqrstuvwxyz123456790"
  const index1 = Math.floor(Math.random() * alphanumeric.length)
  const index2 = Math.floor(Math.random() * alphanumeric.length)
  const randomDigit1 = alphanumeric.charAt(index1)
  const randomDigit2 = alphanumeric.charAt(index2)
  const shortLink = `https://rel.link${randomDigit1}${randomDigit2}`
  return shortLink
}


//menu
const menuMobile = document.getElementById("menuMobile")
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuMobile.classList.remove("hidden")
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuMobile.classList.add("hidden")
    menuOpen = false;
  }
});


