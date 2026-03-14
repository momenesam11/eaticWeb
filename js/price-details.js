const params = new URLSearchParams(window.location.search);
const planId = params.get("plan");

const plan = PLANS[planId];

if (!plan) {
  document.body.innerHTML = "<h2 class='text-center mt-5'>الباقة غير موجودة</h2>";
}

document.getElementById("planTitle").textContent =
  `طلب شراء ${plan.title}`;

document.getElementById("planDescription").textContent =
  plan.description;

document.getElementById("summaryTitle").textContent =
  plan.title;

document.getElementById("summaryDesc").textContent =
  plan.description;

document.getElementById("summaryPrice").textContent =
  plan.price ? plan.price : "حسب الطلب";

const featuresList = document.getElementById("featuresList");
featuresList.innerHTML = "";

plan.features.forEach(f => {
  featuresList.innerHTML += `
    <li class="d-flex gap-2">
      <img src="../assets/openmoji_check-mark.svg">
      <span class="fs-5">${f}</span>
    </li>
  `;
});
