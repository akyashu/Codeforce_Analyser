import { Pie } from "react-chartjs-2";
import "chartjs-plugin-datalabels";


const ProblemVerdict = ({userSubmissions}) => {
   
    let ac=0,tle=0,wa=0,rte=0,others=0;
    // let total=userSubmissions.length;
    for(let i=0;i<userSubmissions.length;i++){
        if(userSubmissions[i].verdict==="OK"){
            ac++;
        }
        else if(userSubmissions[i].verdict==="TIME_LIMIT_EXCEEDED"){
            tle++;
        }
        else if(userSubmissions[i].verdict==="WRONG_ANSWER"){
            wa++;
        }
        else if(userSubmissions[i].verdict==="RUNTIME_ERROR"){
            rte++;
        }
        else{
            others++;
        }
    }
    
    const data = {
        labels: [],
        datasets: [
          {
            label: '',
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
    data.labels.push('Accepted');
    data.datasets[0].data.push(ac);
    data.labels.push('Wrong Answer');
    data.datasets[0].data.push(wa);
    data.labels.push('Time Limit Exceeded');
    data.datasets[0].data.push(tle);
    data.labels.push('Run Time Error');
    data.datasets[0].data.push(rte);
    data.labels.push('Others');
    data.datasets[0].data.push(others);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Verdicts',
            },
            datalabels: {
                display: true,
                align: 'bottom',
                backgroundColor: '#ccc',
                borderRadius: 3,
                font: {
                  size: 18,
                }
            },
        }
    };
    
    return (
        <div>
            <Pie 
                data={data} 
                options={options}
                height={400}
            />
        </div>
    )
}

export default ProblemVerdict
