import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import './App.css'

function App() {

//   const targetDate = new Date('2024-10-19T00:00:00'); // Replace with your target date and time
// const currentDate = new Date();
// const timeDifference = targetDate.getTime() - currentDate.getTime();

  return (
    <>
     <div className='comming-soon-page'>
      <img className='singer-image' src="singer.png" alt="" />
     <h1>COMING</h1> 
     <h2>
      <strong>S</strong>
      <strong>O</strong>
      <strong>O</strong>
      <strong>N</strong>
      </h2>
      <FlipClockCountdown className='flip-clock' to={new Date().getTime() + 720 * 3600 * 1000 + 5000} />;
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSctf-INimUNV4HsOWhNtl4eI6c8-QcOXpdm5VALKecomzvnjQ/viewform"><button>Apply Now</button></a>

     {/* return <FlipClockCountdown to={currentDate.getTime() + timeDifference} />; */}

     <img className='dholk-image' src="dholk.png" alt="" />
     <img className='star-image' src="star.png" alt="" />
     </div>
    </>
  )
}

export default App
