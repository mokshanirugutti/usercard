import './App.css';
import UserCard from './components/UserCard';
import fetchUser from './hooks/fetchUser';
import {useState, useEffect} from 'react'

function App() {
  const [data, setdata] = useState('')
  
  useEffect(() => {
    const fetchdata = async () => {
      const res =  await fetchUser();
      setdata(res);
      console.log('fetching data')
      console.log(res)
    }
    fetchdata()
  }, [])
  return (
    <div className="text-center p-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#F10086] from-20%  via-[#711A75] via-35%  to-[#180A0A] to-80% h-screen w-screen flex flex-col items-center justify-center">
    {data && (
      <div>
          {data && <UserCard user={data[0]} />}
      </div>
    )}
    </div>
  );
}

export default App;
