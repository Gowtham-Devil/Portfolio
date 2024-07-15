var typed = new Typed(".multiple-text",{
    strings: ["Web Developer.","UI/UX Designer.","Software Engineer.","FullStack Developer."],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})



function main(){
        var result = document.getElementById("result")
        result.innerHTML = `<li style="list-style:circle;">User Experience Design - UI/UX</li>
        <li style="list-style:circle;">Web & User Interface Design - Development</li>
        <li style="list-style:circle;">HTML</li>
        <li style="list-style:circle;">CSS</li>
        <li style="list-style:circle;">JavaScript</li>
        <li style="list-style:circle;">MongoDB</li>`
      }

function edu(){
        var result1 = document.getElementById("result")
        result1.innerHTML = `<h1>&rarr; College</h1>
        Nandha Engineering College, <br>
        B.E Computer Science and Engineering, <br>
        2019 - 2023 <br>
        <br>
        <h1>&rarr; School</h1>
        Erode Hindu Kalvi Nilayam School <br>
        2017 - 2019`
      }

function hobby() {
    var result3 = document.getElementById("result")
    result3.innerHTML = `<li style="list-style:circle;">Badminton</li>
    <li style="list-style:circle;">Reading Books</li>
    <li style="list-style:circle;">Photography</li>
    <li style="list-style:circle;">Anime & Series</li>`
}

function loadmore(btn) {
    var load = document.getElementById("loadmore")
    load.innerHTML = `<div class="bg-white py-24 sm:py-1">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div
                    class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 pt-1 sm:mt-16 sm:pt-1 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <article class="flex max-w-xl flex-col items-start justify-between shadow-slate-300 shadow-lg p-8">
                        <div class="flex items-center gap-x-4 text-xs">
                            <time datetime="2020-03-16" class="text-gray-500">Mar 16, 2020</time>
                            <a href="#"
                                class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">CSS Frameworks</a>
                        </div>
                        <div class="group relative">
                            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <a href="#">
                                    <span class="absolute inset-0"></span>
                                    Bootstrap & Tailwind
                                </a>
                            </h3>
                            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Tailwind gives you more freedom to design things your way, while Bootstrap has lots of ready-to-use parts that make building websites quicker.</p>
                        </div>
                        <div class="relative mt-8 flex items-center gap-x-4">
                            <img src="./Assets/css-3.png"
                                alt="" class="h-10 w-10 rounded-full bg-gray-50">
                            <div class="text-sm leading-6">
                                <button class="border border-pink-500 rounded py-2 px-5 hover:text-pink-600">Read More</button>
                            </div>
                        </div>
                    </article>
        
                    <!-- Card-5... -->

                    <article class="flex max-w-xl flex-col items-start justify-between shadow-slate-300 shadow-lg p-8">
                        <div class="flex items-center gap-x-4 text-xs">
                            <time datetime="2020-03-16" class="text-gray-500">Mar 16, 2020</time>
                            <a href="#"
                                class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Front-end Developer</a>
                        </div>
                        <div class="group relative">
                            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <a href="#">
                                    <span class="absolute inset-0"></span>
                                    JavaScript
                                </a>
                            </h3>
                            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">JavaScript (JS) is a cross-platform, object-oriented programming language used by developers to make web pages interactive. It allows developers to create dynamically updating content, use animations, pop-up menus, clickable buttons, control multimedia, etc.</p>
                        </div>
                        <div class="relative mt-8 flex items-center gap-x-4">
                            <img src="./Assets/js.png"
                                alt="" class="h-10 w-10 rounded-full bg-gray-50">
                            <div class="text-sm leading-6">
                                <button class="border border-pink-500 rounded py-2 px-5 hover:text-pink-600">Read More</button>
                            </div>
                        </div>
                    </article>

                    <!-- Card-6... -->

                    <article class="flex max-w-xl flex-col items-start justify-between shadow-slate-300 shadow-lg p-8">
                        <div class="flex items-center gap-x-4 text-xs">
                            <time datetime="2020-03-16" class="text-gray-500">Mar 16, 2020</time>
                            <a href="#"
                                class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Back-end Developer</a>
                        </div>
                        <div class="group relative">
                            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <a href="#">
                                    <span class="absolute inset-0"></span>
                                    Basics Java
                                </a>
                            </h3>
                            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Java is used for developing desktop applications, system software, server applications, and software tools. It is platform-independent, robust, and object-oriented, which simplifies the development and maintenance of complex applications.</p>
                        </div>
                        <div class="relative mt-8 flex items-center gap-x-4">
                            <img src="./Assets/java.png"
                                alt="" class="h-10 w-10 rounded-full bg-gray-50">
                            <div class="text-sm leading-6">
                                <button class="border border-pink-500 rounded py-2 px-5 hover:text-pink-600">Read More</button>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>`
}

