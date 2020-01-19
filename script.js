var currentDate = Date();
        var dateArray = currentDate.split(" ");
        var month = dateArray[1];
        console.log(month);

        var fall = ['apples'];
        var spring = ['flowers'];
        var summer = ['cherries'];
        var winter = ["winter-fruit", "a", "b"];

        var currSeason = getSeason(month);
        var outOfSeasonList = [];
        //var groceryList = [];
        
        // refers to <main>
        const app = new Vue ({
            el: "#app",

            data: {
                message: "this is the message",
                seen: true,
                outSeason: false,
                //isShown: false,
                inputText: "",
                groceryList: [],
                //outOfSeasonList: [],
            },

            methods: {
                // adds item to groceryList
                addItem(item) {
                    item = item.toLowerCase().trim(); // make case insensitive
                    this.groceryList.push( { name: item } )
                    this.inputText = ""
                    // FIX WEIRDNESS
                    this.outOfSeasonList = getOutOfSeason(this.groceryList);
                    //if (this.isShown == true) {
                        
                        //this.toggleIsShown();
                    //}
                },
                // removes item from groceryList
                deleteItem(item) {
                    this.groceryList.splice(this.groceryList.findIndex( i => i.name === item.name ), 1)
                },
                toggleIsShown() {
                    this.isShown = true
                    this.outOfSeasonList = getOutOfSeason(this.groceryList);
                },
                isOutOfSeason(item) {
                    if (this.outOfSeasonList.findIndex( i => i.name === item.name ) != -1) {
                        return "red";
                    }
                    else {
                        return "none";
                    }
                },
             }
            
        })


        function getSeason() {

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
