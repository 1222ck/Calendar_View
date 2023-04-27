<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-absolute shadow-none" >
      <div class="container">
        <a class="navbar-brand" href="/">Material Design</a>
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
              <RouterLink class="nav-link" to="#">About Us</RouterLink></li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="#">Contact Us</RouterLink></li>
          </ul>
          <ul class="nav navbar-nav">
            <!--li class="nav-item">
              <a
                  class="nav-link"
                  href="https://twitter.com/CreativeTim">
                <i class="fa-fw fa-brands fa-twitter fa-2x"></i>
                <font-awesome-icon icon="fa-brands fa-twitter" />
              </a>
            </li>
            <li class="nav-item">
              <a
                  class="nav-link mx-2"
                  href="https://www.facebook.com/CreativeTim">
                <i class="fab fa-facebook"></i>
              </a>
            </li-->
            <li class="nav-item">
              <a class="nav-link" href="/Login">
                로그인
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>