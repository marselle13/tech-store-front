<template>
  <footer class="bg-[#F5F7FF]">
    <section
      class="max-w-[90rem] grid grid-cols-3 justify-items-center pt-[4rem] pb-[2.5rem] mx-auto"
    >
      <div class="flex flex-col justify-center max-w-[16rem] items-center text-center">
        <ProductIcon />
        <h4 class="text-lg font-semibold pt-6 pb-4">Product Support</h4>
        <p class="text-sm text-opacity-70">
          Up to 3 years on-site warranty available for your peace of mind.
        </p>
      </div>
      <div class="flex flex-col justify-center max-w-[16rem] items-center text-center">
        <AccountIcon />
        <h4 class="text-lg font-semibold pt-6 pb-4">Personal Account</h4>
        <p class="text-sm text-opacity-70">
          With big discounts, free delivery and a dedicated support specialist.
        </p>
      </div>
      <div class="flex flex-col justify-center max-w-[16rem] items-center text-center">
        <SavingIcon />
        <h4 class="text-lg font-semibold pt-6 pb-4">Amazing Savings</h4>
        <p class="text-sm text-opacity-70">
          Up to 70% off new Products, you can be sure of the best price.
        </p>
      </div>
    </section>
    <section class="bg-black pt-11 pb-4">
      <div class="max-w-[90rem] mx-auto">
        <div class="flex justify-between">
          <div class="">
            <h2 class="text-white text-4xl">Sign Up To Our Newsletter.</h2>
            <p class="text-white">Be the first to hear about the latest offers.</p>
          </div>
          <div class="space-x-6">
            <base-input type="email" placeholder="Your Email" />
            <base-button class="w-[9rem]">Subscribe</base-button>
          </div>
        </div>
        <div class="grid gap-8 pt-10 pb-8 md:grid-cols-5">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-dark-gray uppercase">Information</h2>
            <ul class="text-sm text-white">
              <li>
                <a href="#" class="hover:underline">About</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Careers</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Brand Center</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-dark-gray uppercase">Help center</h2>
            <ul class="text-sm text-white">
              <li>
                <a href="#" class="hover:underline">Discord Server</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Twitter</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Facebook</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-dark-gray uppercase">Legal</h2>
            <ul class="text-sm text-white">
              <li>
                <a href="#" class="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Licensing</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-dark-gray uppercase">Download</h2>
            <ul class="text-sm text-white">
              <li>
                <a href="#" class="hover:underline">iOS</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Android</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Windows</a>
              </li>
              <li>
                <a href="#" class="hover:underline">MacOS</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex justify-between border-t border-white border-opacity-20 pt-4">
          <div class="flex gap-2">
            <FacebookIcon />
            <InstagramIcon />
          </div>
          <div class="flex gap-2">
            <MasterCardIcon />
            <VisaIcon />
          </div>
          <p class="text-white text-opacity-60">Copyright © 2023.</p>
        </div>
      </div>
    </section>
  </footer>
</template>
<script setup>
import ProductIcon from '@/components/icons/footer/ProductIcon.vue'
import AccountIcon from '@/components/icons/footer/AccountIcon.vue'
import SavingIcon from '@/components/icons/footer/SavingIcon.vue'
import BaseButton from '@/components/ui/form/BaseButton.vue'
import FacebookIcon from '@/components/icons/social/FacebookIcon.vue'
import InstagramIcon from '@/components/icons/social/InstagramIcon.vue'
import VisaIcon from '@/components/icons/payment/VisaIcon.vue'
import MasterCardIcon from '@/components/icons/payment/MasterCardIcon.vue'
</script>
