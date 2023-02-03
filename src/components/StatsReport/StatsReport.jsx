import { memo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';
import { StatsWrapper } from "./StatsReposrt.styled";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIconsData } from "Redux/kapustaSlice";
const StatsReport = () => {
  const iconData = useSelector(getIconsData)
  let newObj = {};
  const { pathname } = useLocation();
  if (iconData.id !== null) {
    if (pathname === "/home/reports") {
      const expensesData = iconData.data.map(item => item.expenses.expensesData);
      expensesData.forEach(item => {
        newObj = item;
      });
      newObj = newObj[iconData.id];
    }
    if (pathname === "/home/reports/income") {
      const incomesData = iconData.data.map(item => item.incomes.incomesData);
      incomesData.forEach(item => {
        newObj = item;
      });
      newObj = newObj[iconData.id];
    }
  }
  const isMobScreen = useMediaQuery({ query: '(max-width: 767.98px)' });
  const isTabScreen = useMediaQuery({ query: '(min-width: 768px)' });
  const isBeforeDescScreen = useMediaQuery({ query: '(max-width: 1279.98px)' });
  const isAfterDescScreen = useMediaQuery({ query: '(min-width: 1280px)' });

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
  );

  const normalObj = { ...newObj };
  delete normalObj.total;

  const sortableObj = Object.fromEntries(
    Object.entries(normalObj).sort(([, a], [, b]) => b - a)
  );

  const arr = Object.values(sortableObj);
  const arrLabel = Object.keys(sortableObj).filter(item => item !== 'total');

  const chartData = {
    labels: arrLabel,
    datasets: [{
      barThickness: isMobScreen ? 15 : 38,
      label: 'Amount',
      data: arr,
      backgroundColor: arr.map((el, idx) => idx === 0 ? '#FF751D' : ((idx) % 3) ? '#FFDAC0' : '#FF751D'),
    }],
  };
  const options = {
    barPercentage: 0.7,
    maintainAspectRatio: false,
    layout: {
      padding: 30,
      fullSize: true,
    },
    responsive: true,
    scales: {
      x: {
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          display: true,
        }
      },
      y: {
        border: {
          display: false,
        },
        ticks: {
          display: false,
          scaleBeginAtZero: true,
          min: arr[arr.length - 1]?.total,
          max: arr[0]?.total * 1.2,

        },
        grid: {
          display: true,
          drawBorder: false,
          showBorder: false,
          lineWidth: 2,
          drawTicks: false,
          color: '#F5F6FB',
        }
      },

    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: "black",
        font: {
          family: 'arial',
          size: 12,
        },
        anchor: "end",
        clamp: true,
        align: "top",
        formatter: function (value, context) {
          return value + 'UAH';
        },
      }
    },
    elements: {
      bar: {
        borderRadius: 10,
      }
    }
  }

  if (isMobScreen) {
    options.layout.padding = 25;
    options.indexAxis = 'y';
    options.maintainAspectRatio = false;
    options.scales.x.grid.display = false;
    options.scales.x.ticks.display = false;
    options.scales.y.grid.display = false;
    options.scales.y.ticks.display = true;
    options.plugins.datalabels.offset = 7;
    options.plugins.datalabels.font.size = 10;
    options.plugins.datalabels.align = 'top';
    options.plugins.datalabels.anchor = 'end';

    options.scales.y.ticks.mirror = true;
    options.scales.y.ticks.labelOffset = -17;
  }

  if (isTabScreen) {
    options.elements.bar.borderRadius = 10;
  }

  return (
    <StatsWrapper>
      {isMobScreen && <Bar plugins={[ChartDataLabels]} options={options} data={chartData} />}
      {isTabScreen && isBeforeDescScreen && <Bar plugins={[ChartDataLabels]} options={options} data={chartData} />}
      {isAfterDescScreen && <Bar plugins={[ChartDataLabels]} options={options} data={chartData} />}
    </StatsWrapper >
  )

}



export default memo(StatsReport);