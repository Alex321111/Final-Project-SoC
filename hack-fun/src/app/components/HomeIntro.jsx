export default function HomeIntro({ userName }) {
  return (
    // <div
    //   class="bg-dark-2  p-4 m-5 rounded-lg shadow-lg"
    // >
    <div className="bg-dark-1 fit-content p-10 m-10 shadow-lg rounded-lg shadow-lg">
      <section>
        <div class="da relative w-full flex justify-center">
          <div class="w-800  flex flex-col justify-center overflow-hidden bg-dark-2">
            <div class="absolute inset-0 bg-center dark:bg-dark-1"></div>
            <div class="group relative flex h-72 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
              <div class="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=2700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  class="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                  alt=""
                />
              </div>
              <div class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                <h1 class="font-serif text-2xl font-bold text-white shadow-xl">
                  Hackathon 2023
                </h1>
                <h1 class="text-sm font-light text-gray-200 shadow-xl">
                  Develop a React SPA with a clear component structure
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
