import logo from './assets/logo.png';
import logo_ransparent from './assets/logo-transparent.png';
function App() {
  return (
    <>
      
      <body>
        <nav class="bg-exact-color-navy border-b border-exact-color-cream">

          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="flex h-20 items-center justify-between">
              <div
                class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
              >
                {/* logo */}
                <a class="flex flex-shrink-0 items-center mr-4" href="/index.html">
                  <img
                    class="h-15 w-auto"
                    src={logo_ransparent}
                    alt="Local Travel Logo"
                  />
                  {/* wording beside logo */}
                  <span class="hidden md:block text-exact-color-cream text-2xl font-title ml-2"
                  >Local Travel</span
                  >
                </a>
                {/* navigation links */ }
                <div class="md:ml-auto flex items-center"> 
                  <div class="flex items-center space-x-2">
                    <a
                      href="/index.html"
                      class="text-exact-color-navy bg-terracotta-400 hover:bg-navy-900 hover:text-white rounded-md px-3 py-2"
                    >Home</a
                    >
                    <a
                      href="/packages.html"
                      class="text-exact-color-navy bg-terracotta-400 hover:bg-navy-900 hover:text-white rounded-md px-3 py-2"
                    >Packages</a
                    >
                    <a
                      href="/contact-us.html"
                      class="text-exact-color-navy bg-terracotta-400 hover:bg-navy-900 hover:text-white rounded-md px-3 py-2"
                    >Contact Us</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>


        <div className="bg-exact-color-cream p-10 text-center">
          <img src={logo} alt="Local Travel logo" className="mx-auto mb-6 w-48" />
          <h1 className="font-title text-7xl text-exact-color-terracotta">Local Travel</h1>
          <p className="font-subtitle text-3xl text-exact-color-navy">travel with no limits</p>
        </div>
        <section class="bg-exact-color-navy py-20">
          <div
            class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
          >
            <div class="text-center">
              <h1
                class="text-4xl font-title text-white sm:text-5xl md:text-6xl"
              >
                Place holder for the main title of the website
              </h1>
              <p class="my-4 text-xl text-white font-subtitle sm:text-2xl md:text-3xl">
                place holder for the subtitle of the website, which is a short description of the website and its purpose
              </p>
            </div>
          </div>
        </section>


        <section class="bg-exact-color-cream px-4 py-10">
          <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-title text-exact-color-terracotta mb-6 text-center">
              Packages
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Job Listing 1 */}
              <div class="bg-white rounded-xl shadow-md relative">
                <div class="p-4 flex gap-4">
                  <img
                    src="https://picsum.photos/seed/job1/160/160"
                    alt="Senior React Developer"
                    class="w-40 h-40 rounded-lg object-cover flex-shrink-0"
                  />
                  <div class="flex-1 min-w-0">
                  <div class="mb-6">
                    <div class="text-gray-600 my-2">place holder 1</div>
                    <h3 class="text-xl font-bold">Hotel name 1</h3>
                  </div>

                  <div class="mb-5">
                    <p>discription 1</p>
                  </div>

                  <h3 class="text-indigo-500 mb-2">price 1</h3>

                  <div class="border border-gray-100 mb-5"></div>

                  <div class="flex flex-col lg:flex-row justify-between mb-4">
                    <div class="text-orange-700 mb-3">
                      <i class="fa-solid fa-location-dot text-lg"></i>
                      location 1
                    </div>
                    <a
                      href="job.html"
                      class="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                      See More
                    </a>
                  </div>
                  </div>
                </div>
              </div>
              {/* Job Listing 2 */}
              <div class="bg-white rounded-xl shadow-md relative">
                <div class="p-4 flex gap-4">
                  <img
                    src="https://picsum.photos/seed/job2/160/160"
                    alt="image 1"
                    class="w-40 h-40 rounded-lg object-cover flex-shrink-0"
                  />
                  <div class="flex-1 min-w-0">
                  <div class="mb-6">
                    <div class="text-gray-600 my-2">place holder 2</div>
                    <h3 class="text-xl font-bold">Hotel name 2</h3>
                  </div>

                  <div class="mb-5">
                    <p>discription 2</p>
                  </div>

                  <h3 class="text-indigo-500 mb-2">price 2</h3>

                  <div class="border border-gray-100 mb-5"></div>

                  <div class="flex flex-col lg:flex-row justify-between mb-4">
                    <div class="text-orange-700 mb-3">
                      <i class="fa-solid fa-location-dot text-lg"></i>
                      Location 2
                    </div>
                    <a
                      href="job.html"
                      class="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                      See More
                    </a>
                  </div>
                  </div>
                </div>
              </div>
              {/* Job Listing 3 */}
              <div class="bg-white rounded-xl shadow-md relative">
                <div class="p-4 flex gap-4">
                  <img
                    src="https://picsum.photos/seed/job3/160/160"
                    alt="image 3"
                    class="w-40 h-40 rounded-lg object-cover flex-shrink-0"
                  />
                  <div class="flex-1 min-w-0">
                  <div class="mb-6">
                    <div class="text-gray-600 my-2">place holder 3</div>
                    <h3 class="text-xl font-bold">Hotel name 3</h3>
                  </div>

                  <div class="mb-5">
                    <p>discription 3</p>
                  </div>

                  <h3 class="text-indigo-500 mb-2">price 3</h3>

                  <div class="border border-gray-100 mb-5"></div>

                  <div class="flex flex-col lg:flex-row justify-between mb-4">
                    <div class="text-orange-700 mb-3">
                      <i class="fa-solid fa-location-dot text-lg"></i>
                      location 3
                    </div>
                    <a
                      href="job.html"
                      class="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                      See More
                    </a>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="m-auto max-w-lg my-10 px-6">
          <a
            href="jobs.html"
            class="block bg-exact-color-terracotta text-white text-center py-4 px-6 rounded-xl hover:bg-navy-900"
          >View All Jobs</a
          >
        </section>

        <script src="js/main.js"></script>
      </body>





    </>
  )
}

export default App
