import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
        <p className='text-black text-2xl'>Hello Dashboard</p>
        <button onClick={() => navigate('/testing')}>Click To Testing Page</button>
    </>
  );
};
