function attachEventsListeners() {
    const buttons = Array.from(document.querySelectorAll("input[type='button']"));

    for (let btn of buttons) {
        btn.addEventListener("click", convertHandler);
    }

    function convertHandler(event) {
        let currentUnitInput = event.currentTarget.parentElement.Children[1];
        let value = Number(currentUnitInput.value);
        let unit = currentUnitInput.id;

        switch (unit) {
            case "days": propangateNewValue(value); break;
            case "hours": propangateNewValue(value / 24); break;
            case "minutes": propangateNewValue(value / 24 / 60); break;
            case "seconds": propangateNewValue(value / 24 / 60 / 60); break;
        }
    }

    function propangateNewValue(days) {
        let inputs = document.querySelectorAll("input[type='text']");
        inputs[0].value = days;
        inputs[1].value = days * 24;
        inputs[2].value = days * 24 * 60;
        inputs[3].value = days * 24 * 60 * 60;
        
    }

}