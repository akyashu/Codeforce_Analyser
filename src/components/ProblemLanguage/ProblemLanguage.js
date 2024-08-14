import { Pie } from "react-chartjs-2";

const ProblemLanguage = ({ userSubmissions }) => {
    let lang = new Map();

    for (let i = 0; i < userSubmissions.length; i++) {
        let currLang = userSubmissions[i].programmingLanguage;

        if (!lang.has(currLang)) {
            lang.set(currLang, 1);
        } else {
            let temp = lang.get(currLang);
            lang.set(currLang, temp + 1);
        }
    }
    
    var langDsc = new Map([...lang.entries()].sort((a, b) => b[1] - a[1]));
    const data = {
        labels: [],
        datasets: [
            {
                label: "",
                data: [],
               backgroundColor: [
    "rgba(228, 28, 28, 0.8)",  // Bright red
    "rgba(138, 216, 38, 0.8)",  // Bright green
    "rgba(4, 119, 198, 0.8)",   // Bright blue
    "rgba(198, 8, 140, 0.8)",   // Bright pink
    "rgba(155, 159, 182, 0.8)", // Light grayish blue
    "rgba(205, 170, 30, 0.8)",  // Bright yellow
],
borderColor: [
    "rgba(228, 28, 28, 1)",    // Bright red border
    "rgba(138, 216, 38, 1)",   // Bright green border
    "rgba(4, 119, 198, 1)",    // Bright blue border
    "rgba(198, 8, 140, 1)",    // Bright pink border
    "rgba(155, 159, 182, 1)",  // Light grayish blue border
    "rgba(205, 170, 30, 1)",   // Bright yellow border
],
hoverBackgroundColor: [
    "rgba(180, 10, 10, 1)",    // Darker red on hover
    "rgba(100, 180, 20, 1)",   // Darker green on hover
    "rgba(0, 90, 150, 1)",     // Darker blue on hover
    "rgba(160, 5, 100, 1)",    // Darker pink on hover
    "rgba(130, 135, 160, 1)",  // Darker grayish blue on hover
    "rgba(170, 140, 20, 1)",   // Darker yellow on hover
],
hoverBorderColor: [
    "rgba(180, 10, 10, 1)",    // Darker red border on hover
    "rgba(100, 180, 20, 1)",   // Darker green border on hover
    "rgba(0, 90, 150, 1)",     // Darker blue border on hover
    "rgba(160, 5, 100, 1)",    // Darker pink border on hover
    "rgba(130, 135, 160, 1)",  // Darker grayish blue border on hover
    "rgba(170, 140, 20, 1)",   // Darker yellow border on hover
],
borderWidth: 1,
hoverBorderWidth: 2,
            },
        ],
    };
    for (let [key, value] of langDsc) {
        data.labels.push(key);
        data.datasets[0].data.push(value);
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Languages'
            }
        },
    };
    return (
        <div>
            <Pie data={data} 
                options={options} 
                height={400} 
            />
        </div>
    );
};

export default ProblemLanguage;
