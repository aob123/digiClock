function digiClock() {
  
   // Create new date, get tens and ones from hours, minutes and seconds 
  let date = new Date();
  let whole = date.toTimeString().substring(0, 8);
  let hour1 = date.toTimeString().substring(0, 1);
  let hour2 = date.toTimeString().substring(1, 2);
  let minute1 = date.toTimeString().substring(3, 4);
  let minute2 = date.toTimeString().substring(4, 5);
  let second1 = date.toTimeString().substring(6, 7);
  let second2 = date.toTimeString().substring(7, 8);

  // Set colours for segment on and off
  const on = "#00B0EB";
  const off = "rgba(128, 128, 128, 0.111)";

  // Get hours, minutes and secods elements
  const h = document.getElementsByClassName("h")[0].querySelectorAll("div");
  const h1 = document.getElementsByClassName("h")[1].querySelectorAll("div");
  const m = document.getElementsByClassName("m")[0].querySelectorAll("div");
  const m1 = document.getElementsByClassName("m")[1].querySelectorAll("div");
  const s = document.getElementsByClassName("s")[0].querySelectorAll("div");
  const s1 = document.getElementsByClassName("s")[1].querySelectorAll("div");

  // Update each segment to produce a number
  function numbers(x, y) {
    for (let i = 0; i < x.length; i++) {
      switch ((x, y)) {
        case "1":
          x[0].style.backgroundColor = off;
          x[1].style.backgroundColor = on;
          x[2].style.backgroundColor = on;
          x[3].style.backgroundColor = off;
          x[4].style.backgroundColor = off;
          x[5].style.backgroundColor = off;
          x[6].style.backgroundColor = off;
          break;
        case "2":
          x[0].style.backgroundColor = on;
          x[1].style.backgroundColor = on;
          x[2].style.backgroundColor = off;
          x[3].style.backgroundColor = on;
          x[4].style.backgroundColor = on;
          x[5].style.backgroundColor = off;
          x[6].style.backgroundColor = on;
          break;
        case "3":
          x[0].style.backgroundColor = on;
          x[1].style.backgroundColor = on;
          x[2].style.backgroundColor = on;
          x[3].style.backgroundColor = on;
          x[4].style.backgroundColor = off;
          x[5].style.backgroundColor = off;
          x[6].style.backgroundColor = on;
          break;
        case "4":
          x[0].style.backgroundColor = off;
          x[1].style.backgroundColor = on;
          x[2].style.backgroundColor = on;
          x[3].style.backgroundColor = off;
          x[4].style.backgroundColor = off;
          x[5].style.backgroundColor = on;
          x[6].style.backgroundColor = on;
          break;
        case "5":
          x[0].style.backgroundColor = on;
          x[1].style.backgroundColor = off;
          x[2].style.backgroundColor = on;
          x[3].style.backgroundColor = on;
          x[4].style.backgroundColor = off;
          x[5].style.backgroundColor = on;
          x[6].style.backgroundColor = on;
          break;
        case "6":
          x[0].style.backgroundColor = on;
          x[1].style.backgroundColor = off;
          x[2].style.backgroundColor = on;
          x[3].style.backgroundColor = on;
          x[4].style.backgroundColor = on;
          x[5].style.backgroundColor = on;
          x[6].style.backgroundColor = on;
          break;
        case "7":
          x[0].style.backgroundColor = on;
          x[1].style.backgroundColor = on;
          x[2].style.backgroundColor = on;
          x[3].style.backgroundColor = off;
          x[4].style.backgroundColor = off;
          x[5].style.backgroundColor = off;
          x[6].style.backgroundColor = off;
          break;
        case "8":
          x[0].style.backgroundColor = on;
          x[1].style.backgroundColor = on;
          x[2].style.backgroundColor = on;
          x[3].style.backgroundColor = on;
          x[4].style.backgroundColor = on;
          x[5].style.backgroundColor = on;
          x[6].style.backgroundColor = on;
          break;
        case "9":
          x[0].style.backgroundColor = on;
          x[1].style.backgroundColor = on;
          x[2].style.backgroundColor = on;
          x[3].style.backgroundColor = on;
          x[4].style.backgroundColor = off;
          x[5].style.backgroundColor = on;
          x[6].style.backgroundColor = on;
          break;
        case "0":
          x[0].style.backgroundColor = on;
          x[1].style.backgroundColor = on;
          x[2].style.backgroundColor = on;
          x[3].style.backgroundColor = on;
          x[4].style.backgroundColor = on;
          x[5].style.backgroundColor = on;
          x[6].style.backgroundColor = off;
          break;
      }
    }
  }

  // Call function and pass relevant element as well as tens and ones from date.
  numbers(h, hour1);
  numbers(h1, hour2);
  numbers(m, minute1);
  numbers(m1, minute2);
  numbers(s, second1);
  numbers(s1, second2);
}

//Call function for clock every second
setInterval(digiClock, 1000);
