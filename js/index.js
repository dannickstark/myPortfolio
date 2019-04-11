    
    $("#my-avatar").mouseenter(function () {
      $(this).tooltip("show");
    });
    $("#my-avatar").mouseleave(function () {
      $(this).tooltip("hide");
    });
    

$("#contact-form").submit(function(e) {
  e.preventDefault();
  alert(1);
  var $form = $(this);
  $.post("mail/contact_me.php", $form.serialize()).then(function() {
    alert("Thank you!");
  });
});

  var computerLanguages = [
    {
      id: "php",
      name: "PHP",
      image: "img/php.png",
      description: `Mit der Objectorientierten Programmierung in PHP habe ich schon große Erfahrung.
      Zusätzlich kann ich richtig gut die "Middleware-Architektur" und die "MVC-Architektur(Model View Controller)" in dieser Programmierspache implementieren.
      Mit den Frameworks Laravel und Zend Framework bin ich eng vertaut.
      `,
      details: [
        {
          name: "Laravel",
          image: "img/laravel.png",
          description: `Laravel ist einer der besten PHP Frameworks, das die "MVC-Architecture" implementiert. Dieses wird von Taylor Otwell gemacht. 
          Damit habe ich schon große Erfahrung gesammelt und kann alle von diesem Framework gebotenen Tools sehr gut benutzen wie zum Beispiel "Queue Driver", "Real Time Communication", "Api Architecture"`,
        },
        {
          name: "Zend Framework",
          image: "img/zend.png",
          description: "Zend Framework ist ein auf PSR-15(PHP Standard Recommandation) basiert Framework, das sich auf die Erstellen von Middleware-Anwendungen spezialisiert.",
        }
      ]
    },
    {
        id: "javascript",
        name: "JavaScript",
        image: "img/javascript.png",
        description: `JavaScript ist wahrscheinlich meine am meistbenutzte Computersprache nicht nur im "Frontend" mit Vuejs sondern auch im "Backend" mit Nodejs. 
        Damit habe ich eine riesige Erfahrung durch die Nutzung von Frameworks gesammelt. Übrigens beherrsche ich sehr gut Ecmascript 6 und einige damit verbundene Tools wie zum Beispiel Babeljs und Webpack.
        `,
        details: [
          {
            name: "Vuejs",
            image: "img/vuejs.png",
            description: "Vue.js ist ein Offene Quelle JavaScript Framework zum Erstellen von Benutzeroberflächen.",
          },
          {
            name: "Reactjs",
            image: "img/react.svg",
            description: "Reactjs ist ein Framework von Facebook, das mit anderen Tools wie zum beispiel Redux, React Router geliefert wird.",
          },
          {
            name: "React Native",
            image: "img/react.svg",
            description: "React Native ist ein Framework für die Erstellung von plattformübergreifende Anwendung(Hybrid App) auf Android und IOS.",
          },
          {
            name: "Angular",
            image: "img/angular.svg",
            description: "Angular ist der MVC-Framework von Google, das auf TypeScript basiert",
          },
          {
            name: "Webpack",
            image: "img/webpack.svg",
            description: "Webpack ist ein offene Quelle JavaScript Compiler. Sein Hauptzweck ist die Bündelung von JavaScript-Dateien zur Verwendung in einem Browser.",
          },
        ]
    },
    {
        id: "dart",
        name: "Dart",
        image: "img/dart.png",
        description: `Dart ist eine Objectorientierte Programmiersprache von Google. 
        Das sollte eine Alternative für Javascript sein und lässt sich für die Erstellung von Web- und mobileanwendungen benutzen.
        Damit habe schon gute Anwendungen für Smartphone gemacht.
        `,
        details: [
          {
            name: "Flutter",
            image: "img/flutter.png",
            description: "Flutter ist ein auf Dart basiert Framework für die Entwicklung von plattformübergreifenden Anwendungen. Das unterscheidet sich von anderen mobilen Frameworks wie React Native durch seine relative schnelle Ausführungsgeschwindigkeit.",
          }
        ]
    },
    {
        id: "java",
        name: "Java",
        image: "img/java.png",
        description: "Mit Java habe ich schon einige Schulprojekte wie zum Beispiel die Entwicklung von vituellen Robotern mit Robocode.",
        details: []
    },
    {
        id: "fsharp",
        name: "F#",
        image: "img/fsharp.png",
        description: "In dieser Programmierspache kenne ich mich schon gut aus und kann einwandfrei functionale Programmierung und objektorientierte Programmierung umsetzen.",
        details: []
    },
    {
        id: "html-css",
        name: "HTML&CSS",
        image: "img/html_css.png",
        description: `HTML 5 Und CSS 3 sind zwei der ersten "Maschinensprachen", die ich gelernt habe. Damit kenne ich mich schon seit langem sehr gut aus.`,
        details: [
          {
            name: "Sass",
            image: "img/sass.svg",
            description: "Gute Erfahrung damit",
          },
          {
            name: "Bootstrap",
            image: "img/bootstrap.png",
            description: "Gute Erfahrung damit",
          },
          {
            name: "Foundation",
            image: "img/foundation.svg",
            description: "Gute Erfahrung damit",
          }
        ]
    }
  ];

  var computerTools = [
    {
      id: "Qt",
      name: "Qt",
      image: "img/qt.png",
      description: `Qt ist das Werkzeug, das ich am meisten benutze. 
      Mit Qt (Qt / C ++, QML) bin ich in der Lage, Software und Anwendungen für viele Plattformen 
      unter Beibehaltung eines Qualitätsdesigns zu realisieren.
      `,
      details: [
        {
          name: "C++",
          image: "img/cplus.png",
          description: `Qt ist ein C ++ - Framework. Es stellt uns viele Ressourcen wie grafische 
          Elemente und einen Designer für eine bessere Effizienz zur Verfügung`,
        },
        {
          name: "QML/JavaScript",
          image: "img/javascript.png",
          description: "Die neue QML-Sprache von Qt ermöglicht es Javascript, Anwendungen und Software zu vereinfachen.",
        }
      ]
    },
    {
        id: "unity",
        name: "Unity 2D/3D",
        image: "img/unity.png",
        description: `Mit Unity musste ich nicht nur 2D-Spiele wie Mario, sondern auch 3D-Spiele wie RPG oder TowerDefence realisieren
        `,
        details: [
          {
            name: "C#",
            image: "img/csharp.png",
            description: `C # ist eine der Sprachen, die ich für das Spielskript verwende.`,
          },
          {
            name: "JavaScript",
            image: "img/javascript.png",
            description: "Dies ist die Skriptsprache, die ich am häufigsten für die Arbeit mit Unity verwende.",
          }
        ]
      },
      {
        id: "Unreal",
        name: "Unreal Engine",
        image: "img/unreal.png",
        description: `Unreal Engine ist ein sehr leistungsfähiges Werkzeug, mit dem 3D-Spiele mit hochwertigen Texturen und Realismus realisiert werden können.
        `,
        details: []
      }
  ];

  var cards = [];
  var tools = [];

  for(var i=0; i<computerLanguages.length; i++){
    cards.push(languageCard(computerLanguages[i]));
  }
  for(var i=0; i<computerTools.length; i++){
    tools.push(toolsCard(computerTools[i]));
  }
  document.querySelector("#computer-languages").innerHTML = cards.join(" ");
  document.querySelector("#computer-tools").innerHTML = tools.join(" ");

  $('[data-toggle="tooltip"]').tooltip();

  slideAnimation('#computer-languages .portfolio-item', ".shadow");
 
  function languageCard (language){
    return `
    <div class="col-md-12 col-sm-12 portfolio-item" style="padding-left:20px;">
        <div class="shadow p-3 mb-5 bg-white rounded row" style="transition:transform 1s, opacity 1s">
            <div style="position:relative;width:100%;justify-content:space-betweeen" class="row">
                <a class="portfolio-link col-md-4 col-sm-12" style="margin:0;max-width:400px !important" id=`+language.id+`>
                  <img class="img-fluid" style="width:255px;height:200px" src="`+language.image+`" alt="logo computer languages">
                </a>
                <div class="portfolio-caption col-md-8 col-sm-12" style="max-width:none;padding:0;margin:0">
                  <h4>`+language.name+`</h4>
                  <p class="text-muted" style="word-break:break-word;padding-left:5px;padding-right:5px">`+language.description+`</p>
                </div>
                `+ btnMore(language.details) +`
                </div>
                <div class="collapse moreInfo" style="width:100%;padding:7px">
                  <div class="card card-body" style="border:none">
                      <div class="column">
                          `+ language.details.map(data=>moreInfoCard(data)).join(" ") +`
                      </div>
                  </div>
              </div>
          </div>
      </div>
    `
  }

  function toolsCard (language){
    return `
    <div align="center" class="col-md-12 col-sm-12">
        <div class="shadow p-3 mb-5 bg-white rounded row" style="transition:transform 1s, opacity 1s">
            <div style="position:relative;width:100%;justify-content:space-betweeen" class="row">
                <a class="portfolio-link col-md-4 col-sm-12" style="margin:0;max-width:400px !important" id=`+language.id+`>
                  <img class="img-fluid" style="width:255px;height:200px" src="`+language.image+`" alt="logo computer languages">
                </a>
                <div class="portfolio-caption col-md-8 col-sm-12" style="max-width:none;padding:0;margin:0">
                  <h4>`+language.name+`</h4>
                  <p class="text-muted" style="word-break:break-word;padding-left:5px;padding-right:5px">`+language.description+`</p>
                </div>
                `+ btnMore(language.details) +`
                </div>
                <div class="collapse moreInfo" style="width:100%;padding:7px">
                  <div class="card card-body" style="border:none">
                      <div class="column">
                          `+ language.details.map(data=>moreInfoCard(data)).join(" ") +`
                      </div>
                  </div>
              </div>
          </div>
      </div>
    `
  }

  
  function toggleCollapse($element){
    $($element.parentNode.parentNode.parentNode.querySelector(".moreInfo")).slideToggle();
  }

  function slideAnimation(observed, modified){
    var observer = new IntersectionObserver(function (observables) {
      observables.forEach(function (observable) {
        if (observable.intersectionRatio > 0.3) {
          observable.target.querySelector(modified).classList.remove('not-visible-left');
          observable.target.querySelector(modified).classList.remove('not-visible-right');
        }
      })
    }, {
      threshold: [0.3]
    });
  
    var items = document.querySelectorAll(observed);
    var index = 0;
    items.forEach(function (item) {
      var $panel = item.querySelector(modified);
      if($panel) {
        $panel.classList.add(((index%2)==0) ? 'not-visible-left' : 'not-visible-right');
        observer.observe(item);
        index++;
      }
    });
  }


if ('serviceWorker' in navigator && 'PushManager' in window) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('serviceWorker.js').then(function(registration) {
            // Registration was successful
            //console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            // registration failed :(
            //console.log('ServiceWorker registration failed: ', err);
        });
    });
}
 
function moreInfoCard(data){
  return `
        <div class="row" style="padding:10px;border-bottom:1px solid rgba(0,0,0,.125)">
          <div class="col-sm-3 column">
            <img src="`+ data.image +`" width="50" height="50"> 
            <h4>`+ data.name +`</h4>                   
          </div>
          <div class="col-sm-9">
            `+ data.description +`
          </div>  
        </div>      
  `
}

function btnMore(data){
  return data.length===0 ? "" : '<a data-toggle="tooltip"  data-placement="top" title="Klicken Sie hier, um weitere Informationen zu erhalten" class="btn-more" onclick="toggleCollapse(this)"><i class="fas fa-chevron-down"></i></a>'
}