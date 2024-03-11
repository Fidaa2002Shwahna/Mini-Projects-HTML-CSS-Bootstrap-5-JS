// preloader
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
});

//bars
let bars = document.querySelector(".bars"),
  content = document.querySelector(".content"),
  sidebar = document.querySelector(".sidebar");

bars.addEventListener("click", () => {
  content.classList.toggle("open");
  sidebar.classList.toggle("display");
});

//sidebars
let firstButton = document.querySelector(".sideLinks li:nth-child(1) i"),
  Homesidecontent = document.querySelector(".Homesidecontent");

firstButton.addEventListener("click", () => {
  Homesidecontent.classList.toggle("showHomeSide");
  if (Homesidecontent.classList.contains("showHomeSide")) {
    firstButton.classList.replace("fa-circle-arrow-right", "fa-circle-down");
  } else {
    firstButton.classList.replace("fa-circle-down", "fa-circle-arrow-right");
  }
});
// firstHomeside
(FirstHomeSideButton = document.querySelector(
  ".Homesidecontent h3:nth-child(1) i"
)),
  (firstHomeside = document.querySelector(".firstHomeside"));

FirstHomeSideButton.addEventListener("click", () => {
  firstHomeside.classList.toggle("showHomeSide");
  if (firstHomeside.classList.contains("showHomeSide")) {
    FirstHomeSideButton.classList.replace(
      "fa-circle-arrow-right",
      "fa-circle-down"
    );
  } else {
    FirstHomeSideButton.classList.replace(
      "fa-circle-down",
      "fa-circle-arrow-right"
    );
  }
});

//secondHomeside
(secondHomeSideButton = document.querySelector(
  ".Homesidecontent h3:nth-child(3) i"
)),
  (secondHomeside = document.querySelector(".secondHomeside"));

secondHomeSideButton.addEventListener("click", () => {
  secondHomeside.classList.toggle("showHomeSide");
  if (secondHomeside.classList.contains("showHomeSide")) {
    secondHomeSideButton.classList.replace(
      "fa-circle-arrow-right",
      "fa-circle-down"
    );
  } else {
    secondHomeSideButton.classList.replace(
      "fa-circle-down",
      "fa-circle-arrow-right"
    );
  }
});

//thirdHomeside
(thirdHomeSideButton = document.querySelector(
  ".Homesidecontent h3:nth-child(5) i"
)),
  (thirdHomeside = document.querySelector(".thirdHomeside"));

thirdHomeSideButton.addEventListener("click", () => {
  thirdHomeside.classList.toggle("showHomeSide");
  if (thirdHomeside.classList.contains("showHomeSide")) {
    thirdHomeSideButton.classList.replace(
      "fa-circle-arrow-right",
      "fa-circle-down"
    );
  } else {
    thirdHomeSideButton.classList.replace(
      "fa-circle-down",
      "fa-circle-arrow-right"
    );
  }
});

//fourthHomeside
(fourthHomeSideButton = document.querySelector(
  ".Homesidecontent h3:nth-child(7) i"
)),
  (fourthHomeside = document.querySelector(".fourthHomeside"));

fourthHomeSideButton.addEventListener("click", () => {
  fourthHomeside.classList.toggle("showHomeSide");
  if (fourthHomeside.classList.contains("showHomeSide")) {
    fourthHomeSideButton.classList.replace(
      "fa-circle-arrow-right",
      "fa-circle-down"
    );
  } else {
    fourthHomeSideButton.classList.replace(
      "fa-circle-down",
      "fa-circle-arrow-right"
    );
  }
});

//close Icon
let closeIcon = document.querySelector("#closeIcon");
closeIcon.addEventListener("click", () => {
  if (
    content.classList.contains("open") &&
    sidebar.classList.contains("display")
  ) {
    content.classList.remove("open");
    sidebar.classList.remove("display");
  }
});

//about us
let aboutUsButton = document.querySelector(".sideLinks li:nth-child(3) i"),
  aboutUssidecontent = document.querySelector(".aboutUsSideContent");

aboutUsButton.addEventListener("click", () => {
  aboutUssidecontent.classList.toggle("showAboutUsSide");
  if (aboutUssidecontent.classList.contains("showAboutUsSide")) {
    aboutUsButton.classList.replace("fa-circle-arrow-right", "fa-circle-down");
  } else {
    aboutUsButton.classList.replace("fa-circle-down", "fa-circle-arrow-right");
  }
});

//service
let serviceButton = document.querySelector(".sideLinks li:nth-child(5) i"),
  servicesidecontent = document.querySelector(".ServiceSideBar");

serviceButton.addEventListener("click", () => {
  servicesidecontent.classList.toggle("showServiceSide");
  if (servicesidecontent.classList.contains("showServiceSide")) {
    serviceButton.classList.replace("fa-circle-arrow-right", "fa-circle-down");
  } else {
    serviceButton.classList.replace("fa-circle-down", "fa-circle-arrow-right");
  }
});

//subServiceSide
let subServiceButton = document.querySelector(" .ServiceSideBar li i"),
  subServiceSidecontent = document.querySelector(".subServiceSide");

subServiceButton.addEventListener("click", () => {
  subServiceSidecontent.classList.toggle("showsubServiceSide");
  if (subServiceSidecontent.classList.contains("showsubServiceSide")) {
    subServiceButton.classList.replace(
      "fa-circle-arrow-right",
      "fa-circle-down"
    );
  } else {
    subServiceButton.classList.replace(
      "fa-circle-down",
      "fa-circle-arrow-right"
    );
  }
});

//page Sidebar
let pageButton = document.querySelector(".sideLinks li:nth-child(7) i"),
  pageSidecontent = document.querySelector(".PageSidebar");

pageButton.addEventListener("click", () => {
  pageSidecontent.classList.toggle("showPageSide");
  if (pageSidecontent.classList.contains("showPageSide")) {
    pageButton.classList.replace("fa-circle-arrow-right", "fa-circle-down");
  } else {
    pageButton.classList.replace("fa-circle-down", "fa-circle-arrow-right");
  }
});
// ------------------------------------------------------------------
// element sidebar
let elementButton = document.querySelector("#element");
let Elementssidecontent = document.querySelector(".Elementssidecontent h3");
elementButton.addEventListener("click", () => {
  Elementssidecontent.classList.toggle("showElement");
  if (Elementssidecontent.classList.contains("showElement")) {
    elementButton.classList.replace("fa-circle-arrow-right", "fa-circle-down");
  } else {
    elementButton.classList.replace("fa-circle-down", "fa-circle-arrow-right");
  }
});

// ------------------------------------------------------------------
//blog sidebar
let blogButton = document.querySelector(".sideLinks li:nth-child(11) i"),
  blogsidecontent = document.querySelector(".BlogUsSideContent");

blogButton.addEventListener("click", () => {
  blogsidecontent.classList.toggle("showBlogSide");
  if (blogsidecontent.classList.contains("showBlogSide")) {
    blogButton.classList.replace("fa-circle-arrow-right", "fa-circle-down");
  } else {
    blogButton.classList.replace("fa-circle-down", "fa-circle-arrow-right");
  }
});
