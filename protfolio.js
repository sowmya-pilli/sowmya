var tablinks = document.getElementsByClassName("tab-links");
            var tabcontents = document.getElementsByClassName("tab-contents");
        
            function opentab(tabname) {
                // Remove the active-link class from all tab links
                for (let tablink of tablinks) {
                    tablink.classList.remove("active-link");
                }
                // Hide all tab contents
                for (let tabcontent of tabcontents) {
                    tabcontent.classList.remove("active-tab");
                    tabcontent.style.display = "none"; // Ensure contents are hidden
                }
                // Add active-link to the current tab and display the selected tab content
                event.currentTarget.classList.add("active-link");
                const activeTab = document.getElementById(tabname);
                activeTab.classList.add("active-tab");
                activeTab.style.display = "block"; // Show the active tab content
            }
        
            var sidemenu= document.getElementById("sidemenu");


            function openmenu() {
               sidemenu.style.right="0";   
          }

          function closemenu() {
            sidemenu.style.right ="-200px";}