
    const one = document.getElementById("one");
    const two = document.getElementById("two");
    const three = document.getElementById("three");
    const four = document.getElementById("four");
    const five = document.getElementById("five");
    const submit = document.querySelector(".form-submit");
    const form = document.querySelector(".form");
    const thanks = document.querySelector(".thanks");
    const sel_value = document.querySelector(".selected-value");
    const white = 'white';
    const grey = '#353e4b';
    let rate = 0;
    
    one.onclick = function(){
      rate = 1;
      this.style.backgroundColor = white;
      this.style.color = grey;
      two.style.backgroundColor = "";
      two.style.color = "";
      three.style.backgroundColor = "";
      three.style.color = "";
      four.style.backgroundColor = "";
      four.style.color = "";
      five.style.backgroundColor = "";
      five.style.color = "";
    }

    two.onclick = function(){
      rate = 2;
      this.style.backgroundColor = white;
      this.style.color = grey;
      one.style.backgroundColor = "";
      one.style.color = "";
      three.style.backgroundColor = "";
      three.style.color = "";
      four.style.backgroundColor = "";
      four.style.color = "";
      five.style.backgroundColor = "";
      five.style.color = "";
    }

    three.onclick = function(){
      rate = 3;
      this.style.backgroundColor = white;
      this.style.color = grey;
      two.style.backgroundColor = "";
      two.style.color = "";
      one.style.backgroundColor = "";
      one.style.color = "";
      four.style.backgroundColor = "";
      four.style.color = "";
      five.style.backgroundColor = "";
      five.style.color = "";
    }

    four.onclick = function(){
      rate = 4;
      this.style.backgroundColor = white;
      this.style.color = grey;
      two.style.backgroundColor = "";
      two.style.color = "";
      three.style.backgroundColor = "";
      three.style.color = "";
      one.style.backgroundColor = "";
      one.style.color = "";
      five.style.backgroundColor = "";
      five.style.color = "";
    }

    five.onclick = function(){
      rate = 5;
      this.style.backgroundColor = white;
      this.style.color = grey;
      two.style.backgroundColor = "";
      two.style.color = "";
      three.style.backgroundColor = "";
      three.style.color = "";
      four.style.backgroundColor = "";
      four.style.color = "";
      one.style.backgroundColor = "";
      one.style.color = "";
    }

    submit.onclick = function(){
      if(rate !== 0) {
        form.style.visibility = 'hidden';
        thanks.style.visibility = 'visible';
      }
      sel_value.textContent = rate;
    }

  
