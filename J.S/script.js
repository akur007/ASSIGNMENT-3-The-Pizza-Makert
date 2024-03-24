document.addEventListener("DOMContentLoaded", function () {
    // Get the form, student info element, and pizza output element
    const pizzaForm = document.getElementById("pizzaForm");
    const studentInfo = document.getElementById("studentInfo");
    const pizzaOutput = document.getElementById("pizzaOutput");

    // Dynamically add student ID and name
    studentInfo.textContent = "Student ID: 200378937 | Name: Anoop";

    // Function to handle form submission
    pizzaForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Capture form values
        const pizzaSize = document.getElementById("pizzaSize").value;
        const crustType = document.getElementById("crustType").value;
        const toppings = document.getElementById("toppings").value.split(",").map(topping => topping.trim());

        // Create Pizza object
        const pizza = new Pizza(pizzaSize, crustType, toppings);

        // Display pizza details
        displayPizza(pizza);
    });

    // Pizza class
    class Pizza {
        constructor(size, crust, toppings) {
            this.size = size;
            this.crust = crust;
            this.toppings = toppings;
        }
    }

    // Function to display pizza details
    function displayPizza(pizza) {
        const pizzaDetails = `Pizza Size: ${pizza.size}<br>
                              Crust Type: ${pizza.crust}<br>
                              Toppings: ${pizza.toppings.join(", ")}`;

        // Display pizza details in HTML
        pizzaOutput.innerHTML = `<h2>Your Pizza Details</h2>${pizzaDetails}`;
    }
});
