import React,{useEffect,useMemo}  from 'react'; 
import {
  Chart as ChartJS,CategoryScale,LinearScale,PointElement,BarElement,Title,Tooltip,Legend,Filler,
} from "chart.js";
import {Flex,Skeleton} from '@chakra-ui/react'; 
import { Bar } from "react-chartjs-2"; 
import visitStore from '../../../store/visitStore' 
import authStore from '../../../store/authStore' 

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// const scores = [6, 5, 5, 5, 3, 4, 6, 4, 5];
// const labels = [100, 200, 300, 400, 500, 600, 700];

const labels =['January','February','March','April','May','June','July','August','September','October','November','December']
let scores =[0,0,0,0,0,0,0,0,0,0,0,0]

const options = {
  fill: true,
  animations: true,
  scales: {
    y: {
      min: 0,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export default function BarChart() {
 
    const id = authStore(state => state.user_id)
    const visits = visitStore(state => state.visits)
    const status = visitStore(state => state.status)
    const visit = visitStore()
    visit.listVisits(id)  
    
  useEffect(() => {  
     for (let i = 0; i < labels.length;++i){ 
        visits.map((visit)=>{
            if(visit.month == labels[i] ){
                 scores[i]= visit.visits;  
            }
        }) 
     } 
  }, [])  
  const data = useMemo(function () {

      
    return {
      datasets: [
        {
          label: "Number of visits",
          tension: 0.3,
          data: scores,
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192, 0.3)",
        },
      ],
      labels,
    };
  }, []);

  return (
    <Flex py='20px'>
        {status ?<Bar data={data} options={options} />: ''}
    </Flex>
  );
}