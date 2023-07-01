$(document).ready(function () {
  if(window.location.href.indexOf("news") > -1){
      var posts = [
          {
              title: "ECEEN’s First Step in South Africa | Solar Charger Bag Show",
              date: "Date: 06/12/2020",
              content: "The business show was on last Jun.2019, it’s around 1 year now, the time runs so fast, but that trip give me a deep impression for South Africa, the social, cultural, city & country…. so that I still want to write something and share to ECEEN favors.",
              img: "img/post1.jpg",
              link: "post1.html"
          },
          {
              title: "ECEEN Waterproof Backpack Perfect for Kayaking Swim Beach Hiking Boat Sailing Camping Fishingw",
              date: "Date: 04/24/2018",
              content: "ECEEN Waterproof Backpack 20L Dry Bag With Padded Shoulder Straps, Phone Pocket & Bottle & Hiking Stick Holder Perfect for Kayaking Swim Beach Hiking Boat Sailing Camping Fishing",
              img: "img/post2.jpg",
              link: "post2.html"
          },
          {
              title: "Be charming like Morning Sun",
              date: "Date: 02/09/2017",
              content: "I am very happy and satisfied today for a trifle of progress in my duty even though only a trifle. I imaged many working conditions, work smoothly, tired, hard. But everything goes well here, tired but with great passion and confidence.",
              img: "img/post3.jpg",
              link: "post3.html"
          }
      ];
  posts.forEach((item) => {
      var post = `<section>
                    <article class="container animate__animated animate__fadeInLeft">
                      <div class="row mt-5">
                        <div class="col-lg-5 col-sm-12 mb-4">
                          <a href="${item.link}"><img src="${item.img}" width="450rem"></a>
                        </div>
                        <div class="col-lg-7 col-sm-12 text-justify my-10px">
                          <p class="articuloPre-titulo link-primary">
                            <a class="text-tertiary text-decoration-none" href="${item.link}">${item.title}</a>
                          </p>
                          <p class="articuloPre-pre">
                            ${item.content}
                          </p>
                        </div>
                      </div>
                    </article>
                  </section>
                  <div class="container">
                    <hr>
                  </div>`;
  $("#posts").append(post);
  });
}

$("#login form").submit(function () {
  let form_name = $("#form_name").val();
  localStorage.setItem("form_name", form_name);
});

var form_name = localStorage.getItem("form_name");

if (form_name != null && form_name != "unfined") {
  let about_parrafo = $("#login");
  $("#login").html("<b><h3>Bienvenido </h3><p>" + form_name + "</p></b>");
  about_parrafo.append("<br><img src='img/user.png' class='mx-auto mb-4 w-25'>");
  about_parrafo.append("<br><a class='text-tertiary text-decoration-none' href = 'cart.html'>Ir al carrito</a>");
  about_parrafo.append("<br><a class='text-tertiary text-decoration-none' href = '#' id = 'logout'>Cerrar Sesión</a>");

  $("#logout").click(function () {
    localStorage.clear();
    location.reload();
  });
}
});