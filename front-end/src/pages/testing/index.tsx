import { useNavigate } from "react-router-dom";

export const TestingPage = () => {
  const navigate = useNavigate();
  
    return (
      <>
          <p className='text-black text-2xl'>Hello TestingPage</p>
          <button onClick={() => navigate('/')}>Click To Dashboard Page</button>
      </>
    );
  };
  