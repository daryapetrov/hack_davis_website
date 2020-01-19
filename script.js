// refers to <main>
const app = new Vue ({
    el: "#app",

    data: {
        inputText: "",
        groceryList: [
           
        ],
    },

    methods: {
        // adds item to groceryList
        addItem(item) {
            this.groceryList.push( { name: item } )
            this.inputText = ""
        },
        // removes item from groceryList
        deleteItem(item) {
            this.groceryList.splice(this.groceryList.findIndex( i => i.name === item.name ), 1)
        },
    }


    
})