let timerDisplay = document.getElementById('timer');
    let alarmSound = document.getElementById('alarm');

    let timer;
    let isRunning = false;
    let currentTime = 0;
    let totalDuration =0;

    function formatTime(seconds) {
      let hrs = Math.floor(seconds / 3600);
      let mins = Math.floor((seconds % 3600) / 60);
      let secs = seconds % 60;
      return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    function updateDisplay() {
      timerDisplay.textContent = formatTime(currentTime);
    }

    function startTimer() {
      if (!isRunning && currentTime > 0) {
        isRunning = true;
        timer = setInterval(() => {
          if (currentTime > 0) {
            currentTime--;
            updateDisplay();
          } else {
            clearInterval(timer);
            isRunning = false;
            alarmSound.play();
          }
        }, 1000);
      }
    }

      function stopTimer() {
      clearInterval(timer);
      isRunning = false;
      currentTime = 0;
      updateDisplay();
    }

    function resetTimer() {
      clearInterval(timer);
      isRunning = false;
      currentTime = totalDuration;
      updateDisplay();
    }

    function setMode(seconds, button) {
      clearInterval(timer);
      isRunning = false;
      currentTime = seconds;
      totalDuration = seconds;
      updateDisplay();
      // Highlight selected mode button
      document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    }

    // Set default mode on load
    window.onload = () => {
      document.querySelectorAll('.mode-btn')[0].click();
    };s
