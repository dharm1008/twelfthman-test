import React from "react";

const Icon = () => (
  <svg
    class="h-6 w-6 flex-none fill-white stroke-indigo-600 stroke-2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <circle cx="12" cy="12" r="11" />
    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
  </svg>
);

const ListItem = ({ item }) => (
  <li class="flex items-center space-x-3">
    <Icon />
    <span>{item}</span>
  </li>
);

const Button = () => (
  <button class="bg-indigo-600 hover:bg-primary-700 focus:ring-primary-200 dark:focus:ring-primary-900 rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4 dark:text-white">
    Get started
  </button>
);

const Assignment1 = () => {
  const basic = [
    "Access to all basic features",
    "Basic reporting and analytics",
    "Upto 10 individual users",
    "20GB individual data each user",
    "Basic chat and email support",
  ];
  const business = [
    "200+ integrations",
    "Advanced reporting and analytics",
    "Upto 20 individuals users",
    "40GB individual data each user",
    "Priority chat and email support",
  ];
  const enterprise = [
    "200+ integrations",
    "Audit log and data history",
    "Unlimited individual users",
    "Unlimited individual data",
    "Personalised priority service",
  ];

  return (
    <section class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div class="p-3 mb-4 max-w-screen-md lg:mb-12">
          <h2 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">
            Simple, transparent pricing
          </h2>
          <p class="mb-5 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
            We believe untitle should be accessible to all companies, no matter
            the size.
          </p>
        </div>
        <div class="space-y-8 sm:gap-6 md:grid md:grid-cols-2 md:space-y-0 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
          {/* <!-- Pricing Card --> */}
          <div class="mx-auto flex w-full flex-col rounded-lg border border-indigo-100 bg-white p-6 text-center text-gray-900 shadow  xl:p-8">
            <div class="my-8 flex items-baseline justify-center">
              <span class="mr-2 text-3xl font-extrabold">$10/mth</span>
            </div>

            <h3 class="mb-2 text-xl font-bold">Basic plan</h3>
            <p class="mb-4 font-light text-gray-500 dark:text-gray-400 sm:text-lg">
              Billed annually.
            </p>

            {/* <!-- List --> */}
            <ul role="list" class="mb-8 space-y-4 text-left">
              {basic.map((item) => (
                <ListItem item={item} />
              ))}
            </ul>
            <Button />
          </div>
          {/* <!-- Pricing Card --> */}
          <div class="mx-auto flex w-full flex-col rounded-lg border border-indigo-100 bg-white p-6 text-center text-gray-900 shadow  xl:p-8">
            <div class="my-8 flex items-baseline justify-center">
              <span class="mr-2 text-3xl font-extrabold">$20/mth</span>
            </div>

            <h3 class="mb-2 text-xl font-bold">Business plan</h3>
            <p class="mb-4 font-light text-gray-500 dark:text-gray-400 sm:text-lg">
              Billed annually.
            </p>
            {/* <!-- List --> */}
            <ul role="list" class="mb-8 space-y-4 text-left">
              {business.map((item) => (
                <ListItem item={item} />
              ))}
            </ul>
            <Button />
          </div>
          {/* <!-- Pricing Card --> */}
          <div class="mx-auto flex w-full flex-col rounded-lg border border-indigo-100 bg-white p-6 text-center text-gray-900 shadow  xl:p-8">
            <div class="my-8 flex items-baseline justify-center">
              <span class="mr-2 text-3xl font-extrabold">$40/mth</span>
            </div>

            <h3 class="mb-2 text-xl font-bold">Enterprise plan</h3>
            <p class="mb-4 font-light text-gray-500 dark:text-gray-400 sm:text-lg">
              Billed annually.
            </p>
            {/* <!-- List --> */}
            <ul role="list" class="mb-8 space-y-4 text-left">
              {enterprise.map((item) => (
                <ListItem item={item} />
              ))}
            </ul>
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assignment1;
