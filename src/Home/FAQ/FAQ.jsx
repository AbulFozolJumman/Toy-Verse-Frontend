
const FAQ = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mx-auto mb-12 p-2 border-s-4 border-pink-600">FAQ</h2>
      <div className="my-12 mx-auto md:px-6">
        <div className="">
          <div className="mx-auto text-center lg:text-left xl:px-32">
            <div className="flex grid items-center lg:grid-cols-2">
              <div className="mb-12 lg:mb-0">
                <div
                  className="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
                  <h3 className="mb-3 text-2xl font-bold">
                    We know how valuable your time is
                  </h3>
                  <h5 className="mb-12 text-lg font-bold text-pink-500 dark:text-primary-400 lg:mb-10 xl:mb-12">
                    Let us answer your questions
                  </h5>

                  <p className="mb-4 font-bold">
                    How can I sell my toys on Toy Verse?
                  </p>
                  <p className="mb-6 text-gray-500 dark:text-neutral-300">
                  To become a seller, sign up and create a seller account. Once registered, you can list your toys, set prices, and manage your inventory through our user-friendly seller dashboard.
                  </p>

                  <p className="mb-4 font-bold">
                    What payment methods are accepted for toy purchases?
                  </p>
                  <p className="mb-6 text-gray-500 dark:text-neutral-300">
                  Toy Verse accepts various payment methods, including credit cards, debit cards, and secure online payment gateways. We prioritize the safety and convenience of your transactions.
                  </p>

                  <p className="mb-4 font-bold">
                    Is there any return policy if I&#39;m not satisfied with a purchased toy?
                  </p>
                  <p className="text-gray-500 dark:text-neutral-300">
                  Yes, Toy Verse offers a hassle-free return policy. If you&#39;re not satisfied with your purchase, you can initiate a return within our specified return period. We&#39;re committed to ensuring your satisfaction with every toy you buy on our platform.
                  </p>
                </div>
              </div>

              <div>
                <img src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/075.jpg"
                  className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;