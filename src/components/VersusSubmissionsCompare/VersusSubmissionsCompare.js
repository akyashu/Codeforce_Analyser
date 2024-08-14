import { Bar } from 'react-chartjs-2';

const VersusSubmissionsCompare = ({username1,username2,userSubmissions1,userSubmissions2}) => {

    let tried1 = new Map();
    let solved1 = new Map();
    for(let i=0;i<userSubmissions1.length;i++){
        let key=userSubmissions1[i].contestId + userSubmissions1[i].problem.index;
        let verdict=userSubmissions1[i].verdict;
        if(!tried1.has(key)){
            tried1.set(key,1);
        }
        if(!solved1.has(key) && verdict==="OK"){
            solved1.set(key,1);
        }
    }
    let submissions1= userSubmissions1.length;

    let tried2 = new Map();
    let solved2 = new Map();
    for(let i=0;i<userSubmissions2.length;i++){
        let key=userSubmissions2[i].contestId + userSubmissions2[i].problem.index;
        let verdict=userSubmissions2[i].verdict;
        if(!tried2.has(key)){
            tried2.set(key,1);
        }
        if(!solved2.has(key) && verdict==="OK"){
            solved2.set(key,1);
        }
    }
    let submissions2= userSubmissions2.length;

    const data = {
        labels: ['Tried','Solved','Total Subissions'],
        datasets: [
          {
            label: username1,
            data: [tried1.size,solved1.size,submissions1],
            backgroundColor: [
    'green',       // Base green background
],

borderColor: [
    'green',       // Base green border
],

hoverBackgroundColor: [
    'darkgreen',   // Darker green for hover
],

hoverBorderColor: [
    'darkgreen',   // Darker green border for hover
],

borderWidth: 2,
hoverBorderWidth: 2,
          },
          {
            label: username2,
            data: [tried2.size,solved2.size,submissions2],
            backgroundColor: [
              'red',
            ],
            borderColor: [
              'red',
            ],
            hoverBackgroundColor: [
    'darkred',   // Darker green for hover
],

hoverBorderColor: [
    'darkred',   // Darker green border for hover
],

borderWidth: 2,
hoverBorderWidth: 2,
          },
        ],
    };

    const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        plugins: {
          title: {
              display: true,
              text: 'Submissions'
          }
        },
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div>
            <Bar 
                data={data} 
                options={options}
	              height={400}
               
            />  
        </div>
    )
}

export default VersusSubmissionsCompare
