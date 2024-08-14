import { Doughnut } from 'react-chartjs-2';

const ProblemTagsGraph = ({userSubmissions}) => {
    
    let tag=new Map();
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
        let currTag=userSubmissions[i].problem.tags;
        
        for(let j=0;j<currTag.length;j++){
            if(!tag.has(currTag[j])){
                tag.set(currTag[j],1);
            }
            else{
                let temp=tag.get(currTag[j]);
                tag.set(currTag[j],temp+1)
            }
        }
        
    }
    
    var tagDsc = new Map([...tag.entries()].sort((a, b) =>  b[1]-a[1]));

    const data = {
        labels: [],
        datasets: [
          {
            label: '',
            data: [],
            backgroundColor: [
    "rgba(138, 216, 38, 0.8)",  // Light green
    "rgba(228, 28, 28, 0.8)",   // Bright red
    "rgba(4, 119, 198, 0.8)",    // Bright blue
    "rgba(198, 8, 140, 0.8)",    // Bright pink
    "rgba(155, 159, 182, 0.8)",  // Light grayish blue
    "rgba(63, 75, 172, 0.8)",    // Deep blue
    "rgba(9, 135, 54, 0.8)",     // Dark green
    "rgba(6, 11, 110, 0.8)",     // Very dark blue
    "rgba(255, 206, 86, 0.8)",   // Bright yellow
    "rgba(75, 192, 192, 0.8)",   // Light teal
    "rgba(153, 102, 255, 0.8)",  // Light purple
    "rgba(255, 159, 64, 0.8)",   // Bright orange
    "rgba(255, 99, 132, 0.8)",   // Light pink
    "rgba(54, 162, 235, 0.8)",   // Light blue
    "rgba(255, 205, 86, 0.8)",   // Light yellow
],
borderColor: [
    "rgba(138, 216, 38, 1)",    // Light green border
    "rgba(228, 28, 28, 1)",     // Bright red border
    "rgba(4, 119, 198, 1)",     // Bright blue border
    "rgba(198, 8, 140, 1)",     // Bright pink border
    "rgba(155, 159, 182, 1)",   // Light grayish blue border
    "rgba(63, 75, 172, 1)",     // Deep blue border
    "rgba(9, 135, 54, 1)",      // Dark green border
    "rgba(6, 11, 110, 1)",      // Very dark blue border
    "rgba(255, 206, 86, 1)",    // Bright yellow border
    "rgba(75, 192, 192, 1)",    // Light teal border
    "rgba(153, 102, 255, 1)",   // Light purple border
    "rgba(255, 159, 64, 1)",    // Bright orange border
    "rgba(255, 99, 132, 1)",    // Light pink border
    "rgba(54, 162, 235, 1)",    // Light blue border
    "rgba(255, 205, 86, 1)",    // Light yellow border
],
hoverBackgroundColor: [
    "rgba(102, 179, 26, 1)",    // Darker green on hover
    "rgba(204, 0, 0, 1)",       // Darker red on hover
    "rgba(2, 90, 160, 1)",      // Darker blue on hover
    "rgba(160, 5, 100, 1)",     // Darker pink on hover
    "rgba(130, 135, 160, 1)",   // Darker grayish blue on hover
    "rgba(50, 60, 140, 1)",     // Darker deep blue on hover
    "rgba(7, 100, 45, 1)",      // Darker green on hover
    "rgba(0, 8, 80, 1)",        // Darker very dark blue on hover
    "rgba(204, 179, 30, 1)",    // Darker yellow on hover
    "rgba(60, 140, 140, 1)",    // Darker teal on hover
    "rgba(120, 80, 200, 1)",    // Darker purple on hover
    "rgba(255, 140, 50, 1)",    // Darker orange on hover
    "rgba(204, 83, 132, 1)",    // Darker pink on hover
    "rgba(44, 130, 205, 1)",    // Darker light blue on hover
    "rgba(255, 190, 50, 1)",    // Darker light yellow on hover
],
borderWidth: 1,
hoverBorderWidth: 2,

            
          },
        ],
    };
    for(let[key,value] of tagDsc){
        data.labels.push(key);
        data.datasets[0].data.push(value);
    }

    const options={
        responsive: true,
        maintainAspectRatio: false,
        plugins:{   
            legend: {
            //   display: false
                position: "right",
                align:"center"
            },
            title: {
                display: true,
                text: 'Problem Tags'
            }
        }
    }
    return (
        <div>
            <Doughnut 
                data={data} 
                options={options}
                height={400}
                
                
            />
        </div>
    )
}

export default ProblemTagsGraph
