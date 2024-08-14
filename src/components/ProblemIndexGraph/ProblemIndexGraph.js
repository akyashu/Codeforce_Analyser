import { Bar } from 'react-chartjs-2';

const IndexGraph = ({userSubmissions}) => {
    let index= new Map();
    let id=new Map();
    for(let i=0;i<userSubmissions.length;i++){
        if(userSubmissions[i].verdict!=="OK"){
            continue;
        }
        let key=userSubmissions[i].contestId + userSubmissions[i].problem.index;
        if(id.has(key)){
            continue;
        }
        id.set(key,true);
        let currIndex=userSubmissions[i].problem.index[0];
        if(currIndex<'A' || currIndex > 'Z'){
          continue;
        }
        if(!index.has(currIndex)){
            index.set(currIndex,1);
        }
        else{
            let temp=index.get(currIndex);
            index.set(currIndex,temp+1)
        }
    }
    
    var indexAsc = new Map([...index.entries()].sort());
    // const data = {
    //     labels: [],
    //     datasets: [
    //       {
    //         label: 'Problem Count',
    //         data: [],
    //         backgroundColor: [
    //           'rgba(228, 28, 28, 0.8)',
    //         ],
    //         borderColor: [
    //           'rgba(228, 28, 28, 1)',
    //         ],
    //         borderWidth: 2,
    //       },
    //     ],
    // };
    const data = {
      labels: [],
      datasets: [
        {
          label: 'Problem Count',
          data: [],
          backgroundColor: 'green', // Light red
borderColor: 'palegreen',       // Red

hoverBackgroundColor: [
    'rgba(243, 156, 18, 1)',    // Dark yellow on hover
    'rgba(142, 68, 173, 1)',    // Dark purple on hover
    'rgba(22, 160, 133, 1)',    // Dark teal on hover
    'rgba(39, 174, 96, 1)',     // Dark green on hover
    'rgba(192, 57, 43, 1)',     // Dark red on hover
    'rgba(211, 84, 0, 1)',      // Dark orange on hover
    'rgba(41, 128, 185, 1)',    // Dark blue on hover
],
hoverBorderColor: [
    'rgba(243, 156, 18, 1)',    // Dark yellow border
    'rgba(142, 68, 173, 1)',    // Dark purple border
    'rgba(22, 160, 133, 1)',    // Dark teal border
    'rgba(39, 174, 96, 1)',     // Dark green border
    'rgba(192, 57, 43, 1)',     // Dark red border
    'rgba(211, 84, 0, 1)',      // Dark orange border
    'rgba(41, 128, 185, 1)',    // Dark blue border
],
borderWidth: 1,
hoverBorderWidth: 2,
        },
      ],
  };
  
    for(let[key,value] of indexAsc){
        data.labels.push(key);
        data.datasets[0].data.push(value);
    }
    

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
              text: 'Problem Index'
          },
          legend: {
            display: false
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

export default IndexGraph
