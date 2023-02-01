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
const initialData = [
    { description: 'Rom', amount: 5000, date: '2023-01-01', category: 'Alcohol', },
    { description: 'Banana', amount: 800, date: '2022-04-04', category: 'Alcohol', },
    { description: 'Tablet', amount: 500, date: '2022-04-03', category: 'Alcohol', },
    { description: 'Cinema', amount: 300, date: '2023-01-17', category: 'Alcohol', }];
const initialData1 = [
    { description: 'sada', amount: 5000, date: '2023-01-01', category: 'Alcohol', },
    { description: 'Basdanana', amount: 800, date: '2022-04-04', category: 'Alcohol', },
    { description: 'asda', amount: 500, date: '2022-04-03', category: 'Alcohol', },
    { description: 'asda', amount: 300, date: '2023-01-17', category: 'Alcohol', }]
const StatsReport = ({ data = initialData, data1 }) => {
    const { pathname } = useLocation();
    if (pathname === "/home/reports/income") {
        data = initialData1;
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
    const arr = [...data].sort((a, b) => b.amount - a.amount);
    const chartData = {
        labels: arr.map(item => item.description),
        datasets: [{
            label: 'Amount',
            data: data.map(item => item.amount),
            backgroundColor: data.map((el, idx) => idx === 0 ? '#FF751D' : ((idx) % 3) ? '#FFDAC0' : '#FF751D'),
        }],
    };

    const options = {
        barPercentage: 0.7,
        layout: {
            padding: 40
        },
        responsive: true,
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: true,
                }
            },
            y: {
                ticks: {
                    display: false,
                    scaleBeginAtZero: false,
                    padding: 3,
                    min: arr[arr.length - 1].amount,
                    max: arr[0].amount * 1.2,
                },
                grid: {
                    display: true,
                    drawTicks: false,
                    offset: true,
                    lineWidth: 3,
                    tickBorderDashOffset: 3,
                    color: '#F5F6FB',
                }
            },

        },
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                display: true,
                color: "black",
                font: {
                    family: 'arial',
                    size: 12,
                },
                anchor: "end",
                offset: -20,
                align: "start",
                formatter: function (value) {
                    return value + ' UAH';
                }
            },
        },
        elements: {
            bar: {
                borderRadius: 15,
            }
        }
    }
    if (isMobScreen) {
        options.layout.padding = 20;
        options.indexAxis = 'y';
        options.maintainAspectRatio = false;
        options.scales.x.grid.display = false;
        options.scales.x.ticks.display = false;
        options.scales.y.grid.display = false;
        options.scales.y.ticks.display = true;
        options.plugins.datalabels.offset = 0;
        options.plugins.datalabels.align = 'end';
        options.plugins.datalabels.font.size = 10;
    }

    if (isTabScreen) {
        options.elements.bar.borderRadius = 5;
        options.layout.padding = 20;
    }

    return (
        <StatsWrapper>
            {isMobScreen && <Bar plugins={[ChartDataLabels]} options={options} data={chartData} />}
            {isTabScreen && isBeforeDescScreen && <Bar plugins={[ChartDataLabels]} options={options} data={chartData} />}
            {isAfterDescScreen && <Bar plugins={[ChartDataLabels]} options={options} data={chartData} />}
        </StatsWrapper>
    )
}


export default memo(StatsReport);