<script setup>
//Vue Material Kit 2 components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import MaterialSwitch from "@/components/MaterialSwitch.vue";
</script>
<template>
  <section class="py-9">
    <div class="container py-4">
      <div class="row">
        <div class="col-lg-7 mx-auto d-flex justify-content-center flex-column">
          <h3 class="text-center">Login</h3>
          <form role="form" id="login-form" method="post" autocomplete="off">
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <MaterialInput
                      class="input-group-dynamic mb-4"
                      :label="{ text: 'EMAIL', class: 'form-label' }"
                      type="text"
                  />
                </div>
                <div class="col-md-12">
                  <MaterialInput
                      class="input-group-dynamic mb-4"
                      :label="{ text: 'PASSWORD', class: 'form-label' }"
                      type="text"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="col-md-12">
                  <MaterialButton
                      type="submit"
                      variant="gradient"
                      color="dark"
                      fullWidth
                  >Login</MaterialButton
                  >
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
