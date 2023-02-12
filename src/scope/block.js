// Block scope

function fruits() {
    if(true) {
        var fruit1 = "Apple"; // Function scope
        let fruit2 = "Kiwi"; // Block scope
        const fruit3 = "Banana"; // Block scope
    };
    console.log(fruit1); // Funcionará porque tiene alcance de función.
    console.log(fruit2); // Fallará porque tiene alcance de bloque.
    console.log(fruit3); // Fallará porque tiene alcance de bloque.
};

fruits();