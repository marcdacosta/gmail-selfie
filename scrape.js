var page = new WebPage(), testindex = 0, loadInProgress = false;
var gmailurl = 'https://accounts.google.com/ServiceLogin?service=mail&passive=true&rm=false&continue=https://mail.google.com/mail/&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1';

page.onConsoleMessage = function(msg) {
    // console.log(msg);
    };
 
page.onLoadStarted = function() {
    loadInProgress = true;
    // console.log("load started");
    };
 
page.onLoadFinished = function() {
    loadInProgress = false;
    // console.log("load finished");
    };
 
var steps = [
    function() {
        // console.log("Load Login Page");
        page.settings.userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36";
        page.open(gmailurl);
        page.viewportSize = { width: 1440, height: 900 };
        },
    function() {
       // console.log("Enter Credentials");
       page.injectJs("jquery-1.10.1.min.js");
       page.evaluate(function() {
         $('#Email').val('GMAIL-LOGIN');
         // console.log(document.title);
        });
      },
    function() {
       // console.log('login');
         page.evaluate(function() {
           // console.log(document.title);
           $('#signIn').click();
         });  
      },
     function() {
       // console.log("Enter Credentials");
       window.setTimeout(function () {
         page.injectJs("jquery-1.10.1.min.js");
         page.evaluate(function() {
           $('#Passwd').val('GMAIL-PWD');
         // console.log(document.title);
          });
        }, 5000); // Change timeout as required to allow sufficient time  
      },
    function() {
       // console.log('login');
       window.setTimeout(function () {
         page.evaluate(function() {
           // console.log(document.title);
           $('#signIn').click();
         });
        }, 10); // Change timeout as required to allow sufficient time  
      },
    function() {
        window.setTimeout(function () {
           console.log('rando');
        }, 5000); // Change timeout as required to allow sufficient time  
    }
]
 
interval = setInterval(function() {
    if (!loadInProgress && typeof steps[testindex] == "function") {
      // console.log("step " + (testindex + 1));
      steps[testindex]();
      // page.render("gmail.png");
      // page.render("images/step" + (testindex + 1) + ".png");
      testindex++;
    }
    if (typeof steps[testindex] != "function") {
      // console.log("test complete!");
      var d = new Date();
      var datestamp = d.getFullYear() + "_" + (d.getMonth()+1) + "_" + d.getDate() + "_" + (d.getUTCHours()+1) + "_" + d.getUTCMinutes();

      setTimeout(function() {
        page.render("gmail_" + datestamp + ".png");
        console.log("gmail_" + datestamp + ".png");
        phantom.exit();
        }, 1000);
      
    }
  }, 10000);






