const eye = document.querySelectorAll(".eye");

if (eye.length > 0) {
  eye.forEach((item) => {
    item.addEventListener("click", () => {
      const parentDiv = item.parentElement;
      const passwordInput = parentDiv.querySelector("input");
      togglePasswordVisibility(passwordInput, item.querySelector("img"));
    });
  });

  function togglePasswordVisibility(pw, icon) {
    if (pw.type === "password") {
      pw.type = "text";
      icon.src = "images/icon-eye-off.svg";
      icon.alt = "Eye Closed Icon";
    } else {
      pw.type = "password";
      icon.src = "images/icon-eye-on.svg";
      icon.alt = "Eye Icon";
    }
  }
}

function generateHeader(text) {
  const headerContainer = document.getElementById("header-container");

  const headerHTML = `
  <div class="header-container">
        <header class="bg-bg1 text-white">
          <div
            class="header-wrapper mx-auto d-flex align-items-center justify-content-between"
          >
            <div class="navbar flex align-items-center gap-4">
              <nav class="d-flex align-items-center gap-5">
                <a href="#" class="text-white fw-medium">Sources</a>
                <a href="#" class="text-white fw-medium">Steroids</a>
                <a href="#" class="text-white fw-medium">Community</a>
              </nav>
              <label
                class="header-search p-2 px-3 d-flex align-items-center"
                for="email"
              >
                <img src="images/icon-search.svg" alt="" />
                <input
                  class="mx-2"
                  type="text"
                  placeholder="Search"
                  id="search"
                />
              </label>
            </div>
            <div class="flex gap-3 nav-btns">
              <a
                style="
                  border-radius: 5px;
                  border: 1px solid var(--primary-800);
                  padding: 6px 8px;
                "
                href="#"
                class=""
                ><img src="images/icon-FavoriteFilled.svg" alt=""
              /></a>
              <a
                style="
                  background-color: var(--primary-800) !important;
                  width: 102px;
                "
                href="#"
                class="fw-semibold fs-7 navbar-btn"
                >Sign in</a
              >
              <a href="#" class="bg-white fw-semibold fs-7 navbar-btn">Login</a>
            </div>
            <span class="hamburger" role="button" tabindex="0">
              <img src="images/icon-hamburger.svg" alt="" />
            </span>
          </div>
          <div class="mobile-header bg-bg1">
            <div class="header-wrapper mx-auto">
              <div
                class="close-nav d-flex align-items-center justify-content-end h-100"
              >
                <img role="button" tabindex="0" src="images/icon-close.svg" alt="" />
              </div>
              <div class="flex flex-column align-items-center gap-5 mt-5">
                <nav class="d-flex flex-column align-items-center gap-5">
                  <a href="#" class="text-white fw-medium">Sources</a>
                  <a href="#" class="text-white fw-medium">Steroids</a>
                  <a href="#" class="text-white fw-medium">Community</a>
                </nav>
                <label
                  class="header-search p-2 px-3 d-flex align-items-center"
                  for="email"
                >
                  <img src="images/icon-search.svg" alt="" />
                  <input
                    class="mx-2"
                    type="text"
                    placeholder="Search"
                    id="search"
                  />
                </label>
              </div>
              <div class="flex justify-content-center gap-3 mt-5">
                <a
                  style="
                    border-radius: 5px;
                    border: 1px solid var(--primary-800);
                    padding: 6px 8px;
                  "
                  href="#"
                  class=""
                  ><img src="images/icon-FavoriteFilled.svg" alt=""
                /></a>
                <a
                  style="
                    background-color: var(--primary-800) !important;
                    width: 102px;
                  "
                  href="#"
                  class="fw-semibold fs-7 navbar-btn"
                  >Sign in</a
                >
                <a href="#" class="bg-white fw-semibold fs-7 navbar-btn"
                  >Login</a
                >
              </div>
            </div>
            <div></div>
          </div>
        </header>
        <section
          class="text-uppercase bg-primary-800 text-dark p-2 d-flex align-items-center justify-content-center fs-1"
        >
          ${text}
        </section>
      </div>
  `;

  headerContainer.innerHTML = headerHTML;
}

window.addEventListener("load", function () {
  const hamburgerButton = document.querySelector(".hamburger");
  const closeNavButton = document.querySelector(".close-nav");
  const mobileHeader = document.querySelector(".mobile-header");

  // Function to add 'display-mobile-navbar' class
  function openMobileNavbar() {
    mobileHeader.classList.add("display-mobile-navbar");
  }

  // Function to remove 'display-mobile-navbar' class
  function closeMobileNavbar() {
    mobileHeader.classList.remove("display-mobile-navbar");
  }

  // Event listener for hamburger button click
  hamburgerButton.addEventListener("click", openMobileNavbar);

  // Event listener for close-nav button click
  closeNavButton.addEventListener("click", closeMobileNavbar);
});
