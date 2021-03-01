class Food {
    constructor() {
        var foodStock;
        this.input = createInput("Name");
        this.button = createButton('Play');
    }

    display() {

        getStock() {
            var gameStockRef = database.ref('gameStock');
            gameStockRef.on("value", function (data) {
                gameStock = data.val();
            })
        }


    }

    update(stock) {
        database.ref('/').update({
            gameStock: state
        });
    }


}
function preload() {
    var milkBottle = loadImage("Images/Milk.png");
}