const quantity = ` 
            <table class="quantity">
                <tr>
                    <th></th>
                    <th class="select_size_label">Size</th>
                    <th class="select_color_label">Color</th>
                </tr>
                <tr>
                    <td>#1</td>
                    <td>
                        <select name="size" class="user_selection size">
                            <option value="volvo" selected>S</option>
                            <option value="saab">M</option>
                            <option value="mercedes">L</option>
                            <option value="audi">XL</option>
                        </select>
                    </td>
                    <td>
                        <select name="color" class="user_selection color">
                            <option value="volvo" selected>Red</option>
                            <option value="saab">Blue</option>
                            <option value="mercedes">Green</option>
                            <option value="audi">Yellow</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>#2</td>
                    <td>
                        <select name="size" class="user_selection size">
                            <option value="volvo" selected>S</option>
                            <option value="saab">M</option>
                            <option value="mercedes">L</option>
                            <option value="audi">XL</option>
                        </select>
                    </td>
                    <td>
                        <select name="color" class="user_selection color">
                            <option value="volvo" selected>Red</option>
                            <option value="saab">Blue</option>
                            <option value="mercedes">Green</option>
                            <option value="audi">Yellow</option>
                        </select>
                    </td>
                </tr>
            </table>
`;

document.querySelectorAll(".card-radio").forEach((radio) => {
  radio.addEventListener("change", function () {
    // Remove 'active' class and any previously appended quantity div from all cards
    document.querySelectorAll(".card").forEach((card) => {
      card.classList.remove("active");
      const existingQuantityDiv = card.querySelector(".quantity");
      if (existingQuantityDiv) {
        existingQuantityDiv.remove(); // Remove the old quantity div if present
      }
    });

    // Add 'active' class to the selected card
    const selectedCard = this.closest(".card");
    selectedCard.classList.add("active");

    // Convert the quantity string to an actual DOM element and append it
    const div = document.createElement("div");
    div.innerHTML = quantity;
    selectedCard.appendChild(div);
  });
});
