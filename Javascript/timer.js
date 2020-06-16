
    let timer = () => {
      let now = new Date();
      document.getElementById('timer').innerHTML =
      `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    }

      let timerID = setInterval(timer,500); //0.5秒ごとに刻んでいく
      //clearInterval(timerID); これで止めることができる
