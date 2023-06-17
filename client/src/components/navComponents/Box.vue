<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- Container wrapper -->
    <div class="container-fluid">
      <!-- Toggle button -->

      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarExampleOnHover">
        <!-- Left links -->
        <ul
          class="navbar-nav me-auto ps-lg-0 w-100 h-100 d-flex justify-content-evenly"
          style="padding-left: 0.15rem"
        >
          <slot />
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
nav,
.collapse {
  height: 60px !important;
}
</style>
