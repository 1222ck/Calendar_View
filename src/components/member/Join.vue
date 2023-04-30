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
        <div class="col-lg-6 col-md-8 col-6 mx-auto">
          <div class="card">
            <div class="card-header">
              <h4 class="font-weight-bolder text-center mt-2 mb-0">
                Sign Up
              </h4>
            </div>
            <div class="card-body">
              <form role="form" class="text-start">
                <div style="position: relative;">
                  <MaterialInput
                      id="email"
                      class="input-group-outline my-3"
                      :label="{ text: 'Email', class: 'form-label' }"
                      type="email"
                      style="width:80%; float:left;"
                  />
                  <MaterialButton variant="gradient" color="success" class="w-auto my-3" style="float: right;">
                    Check
                  </MaterialButton>
                </div>
                <MaterialInput
                    id="name"
                    class="input-group-outline mb-3"
                    :label="{ text: 'Name', class: 'form-label' }"
                    type="text"
                />
                <MaterialInput
                    id="password"
                    class="input-group-outline mb-3"
                    :label="{ text: 'Password', class: 'form-label' }"
                    type="password"
                />
                <MaterialInput
                    id="confirm_password"
                    class="input-group-outline mb-3"
                    :label="{ text: 'Confirm Password', class: 'form-label' }"
                    type="password"
                />

                <div class="text-center">
                  <MaterialButton
                      class="my-4 mb-2"
                      variant="gradient"
                      color="success"
                      fullWidth
                  >Sign Up</MaterialButton
                  >
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>