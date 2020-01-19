        var currentDate = Date();
        var dateArray = currentDate.split(" ");
        var month = dateArray[1];
        console.log(month);

        var currSeason = getSeason(month);
        var outOfSeasonList = [];
        
        // refers to <main>
        const app = new Vue ({
            el: "#app",

            data: {
                inputText: "",
                groceryList: [],
            },

            methods: {
                // adds item to groceryList
                addItem(item) {
                    item = item.toLowerCase().trim(); // make case insensitive
                    if (membershipCheck(item) == true) {
                        this.groceryList.push( { name: item } ) // add to groceryList
                        this.outOfSeasonList = getOutOfSeason(this.groceryList); // update
                    }
                    else {
                        alert("Unfortunately, this item is not in our database. Make sure your item is plural.");
                    }
                    this.inputText = "" // clear input box
                    
                },
                // removes item from groceryList
                deleteItem(item) {
                    this.groceryList.splice(this.groceryList.findIndex( i => i.name === item.name ), 1)
                },
                isOutOfSeason(item) {
                    if (this.outOfSeasonList.findIndex( i => i.name === item.name ) != -1) {
                        return "red";
                    }
                    else {
                        return "none";
                    }
                },
                clearLists() {
                    this.groceryList = [];
                    this.outOfSeasonList = [];
                }
             }
            
        })


        function getSeason(month) {

            if (month == "Jan" || month == "Feb" || month == "Dec") {
                return "winter"
            }
            else if (month == "Mar" || month == "Apr" || month == "May") {
                return "spring"
            }
            else if (month == "Jun" || month == "Jul" || month == "Aug") {
                return "summer"
            }
            else if (month == "Sep" || month == "Oct" || month == "Nov") {
                return "fall"
            }
        }


        function getOutOfSeason(groceryList) {

            if (currSeason == "fall") {
                for (var i = 0; i < groceryList.length; i++) {
                    var inSeason = false;
                    for (var j = 0; j < fall.length; j++) {
                        if (groceryList[i].name == fall[j]) {
                            inSeason = true; 
                        }
                    }
                    if (!inSeason) {
                        outOfSeasonList.push(groceryList[i]);
                    }
                }
            }
            else if (currSeason == "winter") {
                for (var i = 0; i < groceryList.length; i++) {
                    var inSeason = false;
                    for (var j = 0; j < winter.length; j++) {
                        if (groceryList[i].name == winter[j]) {
                            inSeason = true; 
                        }
                    }
                    if (!(inSeason)) {
                        outOfSeasonList.push(groceryList[i]);
                    }
                }
            }
            else if (currSeason == "summer") {
                for (var i = 0; i < groceryList.length; i++) {
                    var inSeason = false;
                    for (var j = 0; j < summer.length; j++) {
                        if (groceryList[i].name == summer[j]) {
                            inSeason = true; 
                        }
                    }
                    if (!inSeason) {
                        outOfSeasonList.push(groceryList[i]);
                    }
                }
            }
            else if (currSeason == "spring") {
                for (var i = 0; i < groceryList.length; i++) {
                    var inSeason = false;
                    for (var j = 0; j < spring.length; j++) {
                        if (groceryList[i].name == spring[j]) {
                            inSeason = true; 
                        }
                    }
                    if (!inSeason) {
                        outOfSeasonList.push(groceryList[i]);
                    }
                }
            }

            return outOfSeasonList;            
            
        }

        // checks if we have the item in our records
        function membershipCheck(item) {
            return ((spring.indexOf(item) != -1)
            || (summer.indexOf(item) != -1)
            || (fall.indexOf(item) != -1)
            || (winter.indexOf(item) != -1));
        }

