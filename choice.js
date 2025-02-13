const phrases = ["Ako na to oh", "Tara na kasi", "You sure about that?",  "Are you positive?", "Cupcake please...", "Pretty pretty pleaseeeeeee", ];
let counter = 0;
const phrase = document.querySelector("#no-btn");
const yes = document.querySelector("#yes-btn");

let sizeMultiplier = 1;

phrase.addEventListener("click", () => {
    if (counter >= phrases.length) {
        return;
    }
    
    phrase.textContent = phrases[counter];
    counter++;
    sizeMultiplier *= 1.4;

    yes.style.fontSize = `${sizeMultiplier}em`;
    yes.style.padding = `${0.5 * sizeMultiplier}em ${1 * sizeMultiplier}em`;
});

yes.addEventListener("click", () => {
  const options = document.querySelector(".options");
  const title = document.querySelector("h1");
  const click = document.querySelector("#click");
  click.style.display = "block";
  title.textContent = "Knew you would say yes!";
  document.querySelector(".image").src = 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjc5YjNhMzV6cGtpMzd4bXUzZzMxNDVrdnVmY3JuYTlsZnZwMW53MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/9XY4f3FgFTT4QlaYqa/giphy.gif';
  options.style.display = "none";
});