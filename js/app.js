(function ($) {
  // sidebar collapsing
  if (window.innerWidth <= 1364) {
    $(".page-container").addClass("sbar_collapsed");
  }
  $(".nav-btn").on("click", function () {
    $(".page-container").toggleClass("sbar_collapsed");
  });

  // slimscroll activation
  $("#menu").metisMenu();

  $(".menu-inner").slimScroll({
    height: "auto",
  });
  $(".nofity-list").slimScroll({
    height: "435px",
  });
  $(".timeline-area").slimScroll({
    height: "500px",
  });
  $(".recent-activity").slimScroll({
    height: "calc(100vh - 114px)",
  });
  $(".settings-list").slimScroll({
    height: "calc(100vh - 158px)",
  });
})(jQuery);

// Chart Js

const ctx = document.getElementById("myChart").getContext("2d");
let delayed;
var gradient = ctx.createLinearGradient(0, 0, 0, 400);

gradient.addColorStop(1, "rgba(166,77,65, 0.3)");
gradient.addColorStop(0, "rgba(255,68,43,1)");

const labels = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Incomes",
      fill: true,
      backgroundColor: gradient,
      borderColor: "rgb(9 31 60)",
      pointBackgroundColor: "#fff",
      tension: 0.4,
      data: [2, 10, 5, 15, 20, 30, 50],
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    radius: 3,
    hitRadius: 30,
    hoverRadius: 8,
    responsive: true,
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === "data" && context.mode === "default" && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
        align: "end",
        labels: {
          fontColor: "#fff",
          fontSize: 12,
          usePointStyle: true,
          padding: 20,
          boxWidth: 10,
          usePointStyle: true,
          pointStyle: "rectRounded",
          pointRadius: 5,
          pointBorderWidth: 2,
        },
      },
    },
  },
};

const myChart = new Chart(ctx, config);

//   Datepicker
$(document).ready(function () {
  $(".input-daterange").datepicker({
    format: "dd-mm-yyyy",
    autoclose: true,
    calendarWeeks: true,
    clearBtn: true,
    disableTouchKeyboard: true,
  });
});

// Animation
AOS.init({
  duration: 1000,
});

var ctxx = document.getElementById("chart-bars").getContext("2d");

new Chart(ctxx, {
  type: "bar",
  data: {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [
      {
        label: "Users",
        tension: 0.4,
        borderWidth: 0,
        borderRadius: 4,
        borderSkipped: false,
        backgroundColor: "rgba(255, 255, 255, 1)",
        data: [50, 20, 10, 22, 50, 10, 40],
        maxBarThickness: 6,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
    scales: {
      y: {
        grid: {
          drawBorder: false,
          display: true,
          drawOnChartArea: true,
          drawTicks: false,
          borderDash: [5, 5],
          color: "rgba(255, 255, 255, .2)",
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 500,
          beginAtZero: true,
          padding: 10,
          font: {
            size: 14,
            weight: 300,
            family: "Roboto",
            style: "normal",
            lineHeight: 2,
          },
          color: "#fff",
        },
      },
      x: {
        grid: {
          drawBorder: false,
          display: true,
          drawOnChartArea: true,
          drawTicks: false,
          borderDash: [5, 5],
          color: "rgba(255, 255, 255, .2)",
        },
        ticks: {
          display: true,  
          color: "#f8f9fa",
          padding: 10,
          font: {
            size: 14,
            weight: 300,
            family: "Roboto",
            style: "normal",
            lineHeight: 2,
          },
        },
      },
    },
  },
});
