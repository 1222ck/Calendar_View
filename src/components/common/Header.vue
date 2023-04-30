<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-absolute shadow-none" >
      <div class="container">
        <a class="navbar-brand" href="/">Calendar Project</a>
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-header-2"
            aria-controls="navbar-header-2"
            aria-expanded="false"
            aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-header-2">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/"> Home </RouterLink></li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/about">About Us</RouterLink></li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/contact">Contact Us</RouterLink></li>
          </ul>
          <ul class="nav navbar-nav">
            <li class="nav-item">
              <a
                  class="nav-link"
                  href="https://twitter.com/CreativeTim">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="nav-item">
              <a
                  class="nav-link mx-2"
                  href="https://www.facebook.com/CreativeTim">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/member/login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>