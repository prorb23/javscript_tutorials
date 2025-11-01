// Immedieately Invoked Function Expressions (IIFE)

(function chai() {
    //named iife
    console.log("Db connected");
})();

( (name) => {
    console.log(`DB connected two ${name}`);
})("Ronit")