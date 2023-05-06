<script setup>
import Faq from '../components/faqComponents/Faq.vue'
import FaqItem from '../components/faqComponents/FaqItem.vue'
import FaqTitle from '../components/faqComponents/FaqTitle.vue'
import Footer from '../components/FooterComponent.vue'
import Copyright from '../components/CopyrightComponent.vue'
</script>

<template>
  <FaqTitle class="border-top d-flex justify-content-center">
    <h2 class="mt-5 text-dark">FAQs</h2>
  </FaqTitle>

  <FaqTitle
    ><p class="mt-2 mb-5">
      Here is a list of our most frequently asked questions along with their answers to make
      ordering with us easier for you.
    </p></FaqTitle
  >
  <FaqTitle><h5 class="mt-2 col-md-9 mx-auto">General</h5></FaqTitle>
  <Faq>
    <FaqItem
      :question="'Where are u located?'"
      :answer="'Muslim Lifestyle Store is located in Kosovo, and all orders are shipped from our KS location.'"
      :header-id="'faq-header-1'"
      :collapse-id="'faq-collapse-1'"
    ></FaqItem>

    <FaqItem
      :question="'Does MLS have a retail store that is open to costumers?'"
      :answer="'We operate entirely online so all orders are taken through our website and shipped to you directly.'"
      :header-id="'faq-header-2'"
      :collapse-id="'faq-collapse-2'"
    ></FaqItem>
  </Faq>
  <FaqTitle><h5 class="mt-5 col-md-9 mx-auto">Customer Accounts</h5></FaqTitle>
  <Faq>
    <FaqItem
      :question="'I cant login to my account?'"
      :answer="'Not to worry! Please contact our customer service team and they will be happy to assist you.'"
      :header-id="'faq-header-3'"
      :collapse-id="'faq-collapse-3'"
    ></FaqItem>
    <FaqItem
      :question="'How do u use the information i provide when i create an account?'"
      :answer="'Muslim Lifestyle never sells or shares any information about you with any third party. Any information you provide to us is kept strictly confidential and is used only by us to serve you. Since we use payment processors we also do not have access to any of your financial information such as your credit/debit card number and we also do not store any of your financial information on our end. For more details please read our Privacy Policy.'"
      :header-id="'faq-header-4'"
      :collapse-id="'faq-collapse-4'"
    ></FaqItem>
  </Faq>
  <FaqTitle><h5 class="mt-5 col-md-9 mx-auto">Ordering</h5></FaqTitle>
  <Faq>
    <FaqItem
      :question="'How do i place an order?'"
      :answer="'To place an order please add the items you want to purchase to your shopping cart. You can do this by selecting the size or color of the item (if applicable) and clicking Add to Cart on the product page. Once youve added all your items, click Checkout to go through the checkout process. You will be asked to enter your address and payment information during checkout. For assistance with placing an order please dont hesitate to contact our Customer Service team.'"
      :header-id="'faq-header-5'"
      :collapse-id="'faq-collapse-5'"
    ></FaqItem>
    <FaqItem
      :question="'Is it safe to shop in your site?'"
      :answer="'We take every precaution to protect our users information. Customers can rest assured that any personal information entered on our site is secured and encrypted. Our entire site (all pages) are secured using strong SSL encryption with the latest encryption standards (2048-Bit TLS 1.2). While on our site, you will see a lock icon next to the address bar of most Web browsers - this identifies the security status of our site.'"
      :header-id="'faq-header-6'"
      :collapse-id="'faq-collapse-6'"
    ></FaqItem>
    <FaqItem
      :question="'How do i cancel or change an order?'"
      :answer="'You may be able to cancel or change your order if it still has a pending or processing status. Please contact our Customer Service team or by replying to your order confirmation. We will do our best to make the changes you request. Unfortunately, if your order has exceeded 24 hours since confirmation we are no longer able to make changes or cancel it.'"
      :header-id="'faq-header-7'"
      :collapse-id="'faq-collapse-7'"
    ></FaqItem>
  </Faq>
  <FaqTitle><h5 class="mt-5 col-md-9 mx-auto">Payments</h5></FaqTitle>
  <Faq>
    <FaqItem
      :question="'What methods of payment do u accept?'"
      :answer="'We accept the following methods of payment-> - All major credit cards and debit cards (Visa, Mastercard, and American Express) - PayPal & Apple Pay - Western Union or Moneygram transfers Unfortunately, we no longer accept cheque or money order payments sent in the mail. If you prefer to pay by cash we recommend paying by Western Union or Moneygram transfer. You will be able to pay in cash at your local office and we will receive the payment much faster than if you were to send a cheque/money order in the mail.'"
      :header-id="'faq-header-8'"
      :collapse-id="'faq-collapse-8'"
    ></FaqItem>
    <FaqItem
      :question="'Do u accept cash on delivery?'"
      :answer="'We do not accept cash as a method of payment. You can pay by Western Union or Moneygram transfer as an alternative to sending cash. You will be able to pay in cash at your local office and we will receive your payment quickly and securely.'"
      :header-id="'faq-header-9'"
      :collapse-id="'faq-collapse-9'"
    ></FaqItem>
    <FaqItem
      :question="'Can i pay using the prepaid card?'"
      :answer="'Yes, we accept prepaid debit cards. Some prepaid debit cards have a restriction on them which allows them to be used only in the country of purchase. If you are having trouble paying with a prepaid debit card please do not hesitate to contact us for assistance.'"
      :header-id="'faq-header-10'"
      :collapse-id="'faq-collapse-10'"
    ></FaqItem>
  </Faq>
  <FaqTitle><h5 class="mt-5 col-md-9 mx-auto">Shipping</h5></FaqTitle>
  <Faq>
    <FaqItem
      :question="'How do i know my order is shipped?'"
      :answer="'You can simply log in to your account and check the status of your order. Once shipped, you will also be receiving an email with the shipping details and tracking information.'"
      :header-id="'faq-header-11'"
      :collapse-id="'faq-collapse-11'"
    ></FaqItem>
    <FaqItem
      :question="'I have placed more than one order. Can i combine them?'"
      :answer="'Usually this part is done automatically on our end but to be sure, once you are done placing all our orders, just send us an email on cs@muslimlifestylestore.com with you order numbers and will make sure to combine them. However, orders with different shipping addresses cannot be combined.'"
      :header-id="'faq-header-12'"
      :collapse-id="'faq-collapse-12'"
    ></FaqItem>
    <FaqItem
      :question="'Can i change my deivery address?'"
      :answer="'You can request a change to your delivery address as long as the order is not shipped from our facility. If the new address is in a location that does not fall under the same shipping category, you maybe asked to cover the additional shipping charges.'"
      :header-id="'faq-header-13'"
      :collapse-id="'faq-collapse-13'"
    ></FaqItem>
    <FaqItem
      :question="'Help! my order was shipped to wrong address?'"
      :answer="'If you provided the wrong address, you would need to contact the courier to have it re-routed to the correct address.There may be additional courier charges that you will need to pay. If the order was shipped incorrectly due to alqamees providing the wrong address.We will cover the costs of getting it shipped out to our correct address as express.'"
      :header-id="'faq-header-14'"
      :collapse-id="'faq-collapse-14'"
    ></FaqItem>
  </Faq>
  <Footer/>
  <Copyright/>
</template>
<style scoped></style>
